import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'

import { UploadRequest,
    UploadResponse,
    MoveRequest,
    MoveResponse,
    CreateSignedUrlRequest,
    CreateSignedUrlResponse,
    DownloadRequest,
    DownloadResponse,
    GetPublicUrlRequest,
    GetPublicUrlResponse,
    RemoveRequest,
    RemoveResponse,
    ListRequest,
    ListResponse
} from 'api/generated/StorageDTO_pb'
import { IStorageServiceServer } from 'api/generated/Storage_grpc_pb'

export class StorageService implements IStorageServiceServer {
    upload(
        call: ServerUnaryCall<UploadRequest, UploadResponse>, callback: sendUnaryData<UploadResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    update(
        call: ServerUnaryCall<UploadRequest, UploadResponse>, callback: sendUnaryData<UploadResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    move(
        call: ServerUnaryCall<MoveRequest, MoveResponse>, callback: sendUnaryData<MoveResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    createSignedUrl(
        call: ServerUnaryCall<CreateSignedUrlRequest, CreateSignedUrlResponse>, callback: sendUnaryData<CreateSignedUrlResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    download(
        call: ServerUnaryCall<DownloadRequest, DownloadResponse>, callback: sendUnaryData<DownloadResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    getPublicUrl(
        call: ServerUnaryCall<GetPublicUrlRequest, GetPublicUrlResponse>, callback: sendUnaryData<GetPublicUrlResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    remove(
        call: ServerUnaryCall<RemoveRequest, RemoveResponse>, callback: sendUnaryData<RemoveResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    list(
        call: ServerUnaryCall<ListRequest, ListResponse>, callback: sendUnaryData<ListResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
