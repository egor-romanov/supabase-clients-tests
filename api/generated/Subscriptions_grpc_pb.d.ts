// package: supabase.v1
// file: Subscriptions.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as Subscriptions_pb from "./Subscriptions_pb";
import * as Common_pb from "./Common_pb";
import * as SubscriptionsDTO_pb from "./SubscriptionsDTO_pb";

interface ISubscriptionsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    remove: ISubscriptionsServiceService_Iremove;
    removeAll: ISubscriptionsServiceService_IremoveAll;
    list: ISubscriptionsServiceService_IList;
}

interface ISubscriptionsServiceService_Iremove extends grpc.MethodDefinition<SubscriptionsDTO_pb.RealtimeSubscription, SubscriptionsDTO_pb.RemoveSubscriptionResponse> {
    path: "/supabase.v1.SubscriptionsService/remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<SubscriptionsDTO_pb.RealtimeSubscription>;
    requestDeserialize: grpc.deserialize<SubscriptionsDTO_pb.RealtimeSubscription>;
    responseSerialize: grpc.serialize<SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
    responseDeserialize: grpc.deserialize<SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
}
interface ISubscriptionsServiceService_IremoveAll extends grpc.MethodDefinition<Common_pb.Empty, SubscriptionsDTO_pb.RemoveSubscriptionResponse> {
    path: "/supabase.v1.SubscriptionsService/removeAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
    responseDeserialize: grpc.deserialize<SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
}
interface ISubscriptionsServiceService_IList extends grpc.MethodDefinition<Common_pb.Empty, SubscriptionsDTO_pb.ListSubscriptionsResponse> {
    path: "/supabase.v1.SubscriptionsService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<SubscriptionsDTO_pb.ListSubscriptionsResponse>;
    responseDeserialize: grpc.deserialize<SubscriptionsDTO_pb.ListSubscriptionsResponse>;
}

export const SubscriptionsServiceService: ISubscriptionsServiceService;

export interface ISubscriptionsServiceServer {
    remove: grpc.handleUnaryCall<SubscriptionsDTO_pb.RealtimeSubscription, SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
    removeAll: grpc.handleUnaryCall<Common_pb.Empty, SubscriptionsDTO_pb.RemoveSubscriptionResponse>;
    list: grpc.handleUnaryCall<Common_pb.Empty, SubscriptionsDTO_pb.ListSubscriptionsResponse>;
}

export interface ISubscriptionsServiceClient {
    remove(request: SubscriptionsDTO_pb.RealtimeSubscription, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    remove(request: SubscriptionsDTO_pb.RealtimeSubscription, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    remove(request: SubscriptionsDTO_pb.RealtimeSubscription, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    removeAll(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    removeAll(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    removeAll(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    list(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    list(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    list(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
}

export class SubscriptionsServiceClient extends grpc.Client implements ISubscriptionsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public remove(request: SubscriptionsDTO_pb.RealtimeSubscription, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public remove(request: SubscriptionsDTO_pb.RealtimeSubscription, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public remove(request: SubscriptionsDTO_pb.RealtimeSubscription, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public removeAll(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public removeAll(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public removeAll(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.RemoveSubscriptionResponse) => void): grpc.ClientUnaryCall;
    public list(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
    public list(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: SubscriptionsDTO_pb.ListSubscriptionsResponse) => void): grpc.ClientUnaryCall;
}
