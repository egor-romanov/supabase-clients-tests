import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import { Empty } from 'api/generated/Common_pb'
import {
    RealtimeSubscription,
    RemoveSubscriptionResponse,
    ListSubscriptionsResponse
} from 'api/generated/SubscriptionsDTO_pb'
import { ISubscriptionsServiceServer } from 'api/generated/Subscriptions_grpc_pb'

export class SubscriptionService implements ISubscriptionsServiceServer {
    remove(
        call: ServerUnaryCall<RealtimeSubscription, RemoveSubscriptionResponse>, callback: sendUnaryData<RemoveSubscriptionResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    removeAll(
        call: ServerUnaryCall<Empty, RemoveSubscriptionResponse>, callback: sendUnaryData<RemoveSubscriptionResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    list(
        call: ServerUnaryCall<Empty, ListSubscriptionsResponse>, callback: sendUnaryData<ListSubscriptionsResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
