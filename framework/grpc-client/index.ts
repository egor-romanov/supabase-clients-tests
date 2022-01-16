import grpc, { ServiceError } from '@grpc/grpc-js'
import * as jspb from 'google-protobuf'
import { ContentType } from 'allure2-js-commons'


import { AuthServiceClient } from 'api/generated/Auth_grpc_pb'
import { StorageServiceClient } from 'api/generated/Storage_grpc_pb'
import { SubscriptionsServiceClient } from 'api/generated/Subscriptions_grpc_pb'

import { IPostgrestFilterBuilder } from 'framework/client/IPostgrestFilterBuider'
import { IRealtimeSubscription } from 'framework/client/IRealtimeSubscription'
import { IStorageClient } from 'framework/client/IStorageClient'
import { ISupabaseQueryBuilder } from 'framework/client/ISupabaseQueryBuilder'
import { IClient } from 'framework/client'
import { ISupabaseAuthClient } from 'framework/client/ISupabaseAuthClient'
import { Empty } from 'api/generated/Common_pb'
import { ListSubscriptionsResponse, RealtimeSubscription } from 'api/generated/SubscriptionsDTO_pb'
import { AllureHelper } from 'framework/allure/AllureHelper'
import { GrpcSupabaseAuthClient } from './GrpcSupabaseAuthClient'

export class GrpcSupabaseClient implements IClient {
    readonly authService: AuthServiceClient
    readonly storageService: StorageServiceClient
    readonly subscriptionService: SubscriptionsServiceClient

    private subscriptions: Map<IRealtimeSubscription, string>
        = new Map<IRealtimeSubscription, string>()

    constructor(url: string) {
        this.authService = new AuthServiceClient(url, grpc.credentials.createInsecure())
        this.storageService = new StorageServiceClient(url, grpc.credentials.createInsecure())
        this.subscriptionService = new SubscriptionsServiceClient(url, grpc.credentials.createInsecure())
        this.auth = new GrpcSupabaseAuthClient(this.authService)
    }

    get auth(): ISupabaseAuthClient {
        return this.auth
    }
    private set auth(authClient: ISupabaseAuthClient) {
        this.auth = authClient
    }

    removeAllSubscriptions(): Promise<unknown> {
        return this.subscriptionService.removeAll(new Empty(), () => {
            this.subscriptions.clear()
        })
    }
    get storage(): IStorageClient {
        throw new Error('Method not implemented.')
    }

    from<T = any>(
        table: string
    ): ISupabaseQueryBuilder<T> {
        throw new Error('Method not implemented.')
    }

    rpc<T = any>(
        fn: string,
        params?: object,
        {
            head = false,
            count = null,
        }: { head?: boolean; count?: null | 'exact' | 'planned' | 'estimated' } = {}
    ): IPostgrestFilterBuilder<T> {
        throw new Error('Method not implemented.')
    }

    removeSubscription(subscription: IRealtimeSubscription): Promise<unknown> {
        if (!this.subscriptions.has(subscription)) {
            return Promise.reject(new Error('subscription not found'))
        }
        return this.subscriptionService.remove(
            new RealtimeSubscription().setId(
                this.subscriptions.get(subscription)
            ),
            () => {
                this.subscriptions.delete(subscription)
            }
        )
    }

    async getSubscriptions(): Promise<IRealtimeSubscription[]> {
        return new Promise<IRealtimeSubscription[]>(
            (resolve, reject) => {
                this.subscriptionService.list(new Empty(), (err, data) => {
                    resolveGrpc<Empty, ListSubscriptionsResponse>(
                        'messageEventError', new Empty(), data, err, reject,
                        () => resolve([...this.subscriptions.keys()]))
                })
            })
    }
}

export function resolveGrpc<TREQ extends jspb.Message, TRESP extends jspb.Message>(
    stepName: string,
    request: TREQ,
    responseData: TRESP,
    grpcError: ServiceError | null,
    reject: (...args: Array<unknown>) => void,
    successCallback: () => void
) {
    AllureHelper.createStep(`GRPC request: ${stepName}`, () => {
        AllureHelper.attach(
            'Request', JSON.stringify(request.toObject(false)), ContentType.JSON)

        if (grpcError) {
            AllureHelper.attach(
                'GRPC error', JSON.stringify(grpcError), ContentType.JSON)
            return reject(grpcError)
        }

        if (responseData.hasError()) {
            const error = responseData.getError()

            AllureHelper.attach(
                'Error', JSON.stringify(error.toObject(false), null, 2), ContentType.TEXT)
            return reject(error.toObject(false))
        }

        AllureHelper.attach(
            'Response', JSON.stringify(responseData.toObject(false)), ContentType.JSON)
        successCallback()
    })
}
