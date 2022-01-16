// package: supabase.v1
// file: Storage.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as Storage_pb from "./Storage_pb";
import * as StorageDTO_pb from "./StorageDTO_pb";

interface IStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    upload: IStorageServiceService_IUpload;
    update: IStorageServiceService_IUpdate;
    move: IStorageServiceService_IMove;
    createSignedUrl: IStorageServiceService_ICreateSignedUrl;
    download: IStorageServiceService_IDownload;
    getPublicUrl: IStorageServiceService_IGetPublicUrl;
    remove: IStorageServiceService_IRemove;
    list: IStorageServiceService_IList;
}

interface IStorageServiceService_IUpload extends grpc.MethodDefinition<StorageDTO_pb.UploadRequest, StorageDTO_pb.UploadResponse> {
    path: "/supabase.v1.StorageService/Upload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.UploadRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.UploadRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.UploadResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.UploadResponse>;
}
interface IStorageServiceService_IUpdate extends grpc.MethodDefinition<StorageDTO_pb.UploadRequest, StorageDTO_pb.UploadResponse> {
    path: "/supabase.v1.StorageService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.UploadRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.UploadRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.UploadResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.UploadResponse>;
}
interface IStorageServiceService_IMove extends grpc.MethodDefinition<StorageDTO_pb.MoveRequest, StorageDTO_pb.MoveResponse> {
    path: "/supabase.v1.StorageService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.MoveRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.MoveRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.MoveResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.MoveResponse>;
}
interface IStorageServiceService_ICreateSignedUrl extends grpc.MethodDefinition<StorageDTO_pb.CreateSignedUrlRequest, StorageDTO_pb.CreateSignedUrlResponse> {
    path: "/supabase.v1.StorageService/CreateSignedUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.CreateSignedUrlRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.CreateSignedUrlRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.CreateSignedUrlResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.CreateSignedUrlResponse>;
}
interface IStorageServiceService_IDownload extends grpc.MethodDefinition<StorageDTO_pb.DownloadRequest, StorageDTO_pb.DownloadResponse> {
    path: "/supabase.v1.StorageService/Download";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.DownloadRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.DownloadRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.DownloadResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.DownloadResponse>;
}
interface IStorageServiceService_IGetPublicUrl extends grpc.MethodDefinition<StorageDTO_pb.GetPublicUrlRequest, StorageDTO_pb.GetPublicUrlResponse> {
    path: "/supabase.v1.StorageService/GetPublicUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.GetPublicUrlRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.GetPublicUrlRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.GetPublicUrlResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.GetPublicUrlResponse>;
}
interface IStorageServiceService_IRemove extends grpc.MethodDefinition<StorageDTO_pb.RemoveRequest, StorageDTO_pb.RemoveResponse> {
    path: "/supabase.v1.StorageService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.RemoveRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.RemoveRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.RemoveResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.RemoveResponse>;
}
interface IStorageServiceService_IList extends grpc.MethodDefinition<StorageDTO_pb.ListRequest, StorageDTO_pb.ListResponse> {
    path: "/supabase.v1.StorageService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<StorageDTO_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<StorageDTO_pb.ListRequest>;
    responseSerialize: grpc.serialize<StorageDTO_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<StorageDTO_pb.ListResponse>;
}

export const StorageServiceService: IStorageServiceService;

export interface IStorageServiceServer {
    upload: grpc.handleUnaryCall<StorageDTO_pb.UploadRequest, StorageDTO_pb.UploadResponse>;
    update: grpc.handleUnaryCall<StorageDTO_pb.UploadRequest, StorageDTO_pb.UploadResponse>;
    move: grpc.handleUnaryCall<StorageDTO_pb.MoveRequest, StorageDTO_pb.MoveResponse>;
    createSignedUrl: grpc.handleUnaryCall<StorageDTO_pb.CreateSignedUrlRequest, StorageDTO_pb.CreateSignedUrlResponse>;
    download: grpc.handleUnaryCall<StorageDTO_pb.DownloadRequest, StorageDTO_pb.DownloadResponse>;
    getPublicUrl: grpc.handleUnaryCall<StorageDTO_pb.GetPublicUrlRequest, StorageDTO_pb.GetPublicUrlResponse>;
    remove: grpc.handleUnaryCall<StorageDTO_pb.RemoveRequest, StorageDTO_pb.RemoveResponse>;
    list: grpc.handleUnaryCall<StorageDTO_pb.ListRequest, StorageDTO_pb.ListResponse>;
}

export interface IStorageServiceClient {
    upload(request: StorageDTO_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    upload(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    upload(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    update(request: StorageDTO_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    update(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    update(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    move(request: StorageDTO_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    move(request: StorageDTO_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    move(request: StorageDTO_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    download(request: StorageDTO_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    download(request: StorageDTO_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    download(request: StorageDTO_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    remove(request: StorageDTO_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: StorageDTO_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    remove(request: StorageDTO_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    list(request: StorageDTO_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: StorageDTO_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: StorageDTO_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
}

export class StorageServiceClient extends grpc.Client implements IStorageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public upload(request: StorageDTO_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public upload(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public upload(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public update(request: StorageDTO_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public update(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public update(request: StorageDTO_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.UploadResponse) => void): grpc.ClientUnaryCall;
    public move(request: StorageDTO_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    public move(request: StorageDTO_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    public move(request: StorageDTO_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.MoveResponse) => void): grpc.ClientUnaryCall;
    public createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    public createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    public createSignedUrl(request: StorageDTO_pb.CreateSignedUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.CreateSignedUrlResponse) => void): grpc.ClientUnaryCall;
    public download(request: StorageDTO_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public download(request: StorageDTO_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public download(request: StorageDTO_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.DownloadResponse) => void): grpc.ClientUnaryCall;
    public getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    public getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    public getPublicUrl(request: StorageDTO_pb.GetPublicUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.GetPublicUrlResponse) => void): grpc.ClientUnaryCall;
    public remove(request: StorageDTO_pb.RemoveRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: StorageDTO_pb.RemoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public remove(request: StorageDTO_pb.RemoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.RemoveResponse) => void): grpc.ClientUnaryCall;
    public list(request: StorageDTO_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: StorageDTO_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: StorageDTO_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: StorageDTO_pb.ListResponse) => void): grpc.ClientUnaryCall;
}
