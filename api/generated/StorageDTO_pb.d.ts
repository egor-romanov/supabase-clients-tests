// package: supabase.v1
// file: StorageDTO.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";

export class UploadResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): UploadData | undefined;
    setData(value?: UploadData): UploadResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): UploadResponse;

    getUploaddataOneOfCase(): UploadResponse.UploaddataOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadResponse;
    static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
    export type AsObject = {
        data?: UploadData.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum UploaddataOneOfCase {
        UPLOADDATA_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class UploadData extends jspb.Message { 
    getKey(): string;
    setKey(value: string): UploadData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadData.AsObject;
    static toObject(includeInstance: boolean, msg: UploadData): UploadData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadData;
    static deserializeBinaryFromReader(message: UploadData, reader: jspb.BinaryReader): UploadData;
}

export namespace UploadData {
    export type AsObject = {
        key: string,
    }
}

export class UploadRequest extends jspb.Message { 
    getBucketid(): string;
    setBucketid(value: string): UploadRequest;
    getPath(): string;
    setPath(value: string): UploadRequest;

    hasFilebody(): boolean;
    clearFilebody(): void;
    getFilebody(): FileBody | undefined;
    setFilebody(value?: FileBody): UploadRequest;

    hasFileoptions(): boolean;
    clearFileoptions(): void;
    getFileoptions(): FileOptions | undefined;
    setFileoptions(value?: FileOptions): UploadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadRequest;
    static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
    export type AsObject = {
        bucketid: string,
        path: string,
        filebody?: FileBody.AsObject,
        fileoptions?: FileOptions.AsObject,
    }
}

export class FileBody extends jspb.Message { 

    hasBuffer(): boolean;
    clearBuffer(): void;
    getBuffer(): Uint8Array | string;
    getBuffer_asU8(): Uint8Array;
    getBuffer_asB64(): string;
    setBuffer(value: Uint8Array | string): FileBody;

    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): FileBody;

    hasFormdata(): boolean;
    clearFormdata(): void;
    getFormdata(): FormData | undefined;
    setFormdata(value?: FormData): FileBody;

    hasUrlsearchparams(): boolean;
    clearUrlsearchparams(): void;
    getUrlsearchparams(): URLSearchParams | undefined;
    setUrlsearchparams(value?: URLSearchParams): FileBody;

    hasStr(): boolean;
    clearStr(): void;
    getStr(): string;
    setStr(value: string): FileBody;

    getFilebodyOneOfCase(): FileBody.FilebodyOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileBody.AsObject;
    static toObject(includeInstance: boolean, msg: FileBody): FileBody.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileBody, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileBody;
    static deserializeBinaryFromReader(message: FileBody, reader: jspb.BinaryReader): FileBody;
}

export namespace FileBody {
    export type AsObject = {
        buffer: Uint8Array | string,
        file?: File.AsObject,
        formdata?: FormData.AsObject,
        urlsearchparams?: URLSearchParams.AsObject,
        str: string,
    }

    export enum FilebodyOneOfCase {
        FILEBODY_ONE_OF_NOT_SET = 0,
        BUFFER = 1,
        FILE = 2,
        FORMDATA = 3,
        URLSEARCHPARAMS = 4,
        STR = 5,
    }

}

export class File extends jspb.Message { 
    getLastmodified(): number;
    setLastmodified(value: number): File;
    getName(): string;
    setName(value: string): File;
    getWebkitrelativepath(): string;
    setWebkitrelativepath(value: string): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        lastmodified: number,
        name: string,
        webkitrelativepath: string,
    }
}

export class FormData extends jspb.Message { 

    getPricesMap(): jspb.Map<string, string>;
    clearPricesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormData.AsObject;
    static toObject(includeInstance: boolean, msg: FormData): FormData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormData;
    static deserializeBinaryFromReader(message: FormData, reader: jspb.BinaryReader): FormData;
}

export namespace FormData {
    export type AsObject = {

        pricesMap: Array<[string, string]>,
    }
}

export class URLSearchParams extends jspb.Message { 
    getParams(): string;
    setParams(value: string): URLSearchParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): URLSearchParams.AsObject;
    static toObject(includeInstance: boolean, msg: URLSearchParams): URLSearchParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: URLSearchParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): URLSearchParams;
    static deserializeBinaryFromReader(message: URLSearchParams, reader: jspb.BinaryReader): URLSearchParams;
}

export namespace URLSearchParams {
    export type AsObject = {
        params: string,
    }
}

export class FileOptions extends jspb.Message { 
    getCachecontrol(): string;
    setCachecontrol(value: string): FileOptions;
    getContenttype(): string;
    setContenttype(value: string): FileOptions;
    getUpsert(): boolean;
    setUpsert(value: boolean): FileOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileOptions.AsObject;
    static toObject(includeInstance: boolean, msg: FileOptions): FileOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileOptions;
    static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
}

export namespace FileOptions {
    export type AsObject = {
        cachecontrol: string,
        contenttype: string,
        upsert: boolean,
    }
}

export class MoveResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): MoveData | undefined;
    setData(value?: MoveData): MoveResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): MoveResponse;

    getMovedataOneOfCase(): MoveResponse.MovedataOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MoveResponse): MoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveResponse;
    static deserializeBinaryFromReader(message: MoveResponse, reader: jspb.BinaryReader): MoveResponse;
}

export namespace MoveResponse {
    export type AsObject = {
        data?: MoveData.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum MovedataOneOfCase {
        MOVEDATA_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class MoveData extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): MoveData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveData.AsObject;
    static toObject(includeInstance: boolean, msg: MoveData): MoveData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveData;
    static deserializeBinaryFromReader(message: MoveData, reader: jspb.BinaryReader): MoveData;
}

export namespace MoveData {
    export type AsObject = {
        message: string,
    }
}

export class MoveRequest extends jspb.Message { 
    getBucketid(): string;
    setBucketid(value: string): MoveRequest;
    getFrompath(): string;
    setFrompath(value: string): MoveRequest;
    getTopath(): string;
    setTopath(value: string): MoveRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveRequest): MoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveRequest;
    static deserializeBinaryFromReader(message: MoveRequest, reader: jspb.BinaryReader): MoveRequest;
}

export namespace MoveRequest {
    export type AsObject = {
        bucketid: string,
        frompath: string,
        topath: string,
    }
}

export class CreateSignedUrlResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): CreateSignedUrlData | undefined;
    setData(value?: CreateSignedUrlData): CreateSignedUrlResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): CreateSignedUrlResponse;

    hasSignedurl(): boolean;
    clearSignedurl(): void;
    getSignedurl(): string;
    setSignedurl(value: string): CreateSignedUrlResponse;

    getCreatesignedurldataOneOfCase(): CreateSignedUrlResponse.CreatesignedurldataOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSignedUrlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSignedUrlResponse): CreateSignedUrlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSignedUrlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSignedUrlResponse;
    static deserializeBinaryFromReader(message: CreateSignedUrlResponse, reader: jspb.BinaryReader): CreateSignedUrlResponse;
}

export namespace CreateSignedUrlResponse {
    export type AsObject = {
        data?: CreateSignedUrlData.AsObject,
        error?: Common_pb.Error.AsObject,
        signedurl: string,
    }

    export enum CreatesignedurldataOneOfCase {
        CREATESIGNEDURLDATA_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
        SIGNEDURL = 3,
    }

}

export class CreateSignedUrlData extends jspb.Message { 
    getSignedurl(): string;
    setSignedurl(value: string): CreateSignedUrlData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSignedUrlData.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSignedUrlData): CreateSignedUrlData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSignedUrlData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSignedUrlData;
    static deserializeBinaryFromReader(message: CreateSignedUrlData, reader: jspb.BinaryReader): CreateSignedUrlData;
}

export namespace CreateSignedUrlData {
    export type AsObject = {
        signedurl: string,
    }
}

export class CreateSignedUrlRequest extends jspb.Message { 
    getBucketid(): string;
    setBucketid(value: string): CreateSignedUrlRequest;
    getPath(): string;
    setPath(value: string): CreateSignedUrlRequest;
    getExpiresin(): number;
    setExpiresin(value: number): CreateSignedUrlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSignedUrlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSignedUrlRequest): CreateSignedUrlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSignedUrlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSignedUrlRequest;
    static deserializeBinaryFromReader(message: CreateSignedUrlRequest, reader: jspb.BinaryReader): CreateSignedUrlRequest;
}

export namespace CreateSignedUrlRequest {
    export type AsObject = {
        bucketid: string,
        path: string,
        expiresin: number,
    }
}

export class DownloadResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): DownloadResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): DownloadResponse;

    getDownloadOneOfCase(): DownloadResponse.DownloadOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadResponse): DownloadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadResponse;
    static deserializeBinaryFromReader(message: DownloadResponse, reader: jspb.BinaryReader): DownloadResponse;
}

export namespace DownloadResponse {
    export type AsObject = {
        data: Uint8Array | string,
        error?: Common_pb.Error.AsObject,
    }

    export enum DownloadOneOfCase {
        DOWNLOAD_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class DownloadRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): DownloadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadRequest): DownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadRequest;
    static deserializeBinaryFromReader(message: DownloadRequest, reader: jspb.BinaryReader): DownloadRequest;
}

export namespace DownloadRequest {
    export type AsObject = {
        path: string,
    }
}

export class GetPublicUrlResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): GetPublicUrlData | undefined;
    setData(value?: GetPublicUrlData): GetPublicUrlResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): GetPublicUrlResponse;

    hasPublicurl(): boolean;
    clearPublicurl(): void;
    getPublicurl(): string;
    setPublicurl(value: string): GetPublicUrlResponse;

    getGetpublicurlOneOfCase(): GetPublicUrlResponse.GetpublicurlOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPublicUrlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPublicUrlResponse): GetPublicUrlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPublicUrlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPublicUrlResponse;
    static deserializeBinaryFromReader(message: GetPublicUrlResponse, reader: jspb.BinaryReader): GetPublicUrlResponse;
}

export namespace GetPublicUrlResponse {
    export type AsObject = {
        data?: GetPublicUrlData.AsObject,
        error?: Common_pb.Error.AsObject,
        publicurl: string,
    }

    export enum GetpublicurlOneOfCase {
        GETPUBLICURL_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
        PUBLICURL = 3,
    }

}

export class GetPublicUrlData extends jspb.Message { 
    getPublicurl(): string;
    setPublicurl(value: string): GetPublicUrlData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPublicUrlData.AsObject;
    static toObject(includeInstance: boolean, msg: GetPublicUrlData): GetPublicUrlData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPublicUrlData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPublicUrlData;
    static deserializeBinaryFromReader(message: GetPublicUrlData, reader: jspb.BinaryReader): GetPublicUrlData;
}

export namespace GetPublicUrlData {
    export type AsObject = {
        publicurl: string,
    }
}

export class GetPublicUrlRequest extends jspb.Message { 
    getBucketid(): string;
    setBucketid(value: string): GetPublicUrlRequest;
    getPath(): string;
    setPath(value: string): GetPublicUrlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPublicUrlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPublicUrlRequest): GetPublicUrlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPublicUrlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPublicUrlRequest;
    static deserializeBinaryFromReader(message: GetPublicUrlRequest, reader: jspb.BinaryReader): GetPublicUrlRequest;
}

export namespace GetPublicUrlRequest {
    export type AsObject = {
        bucketid: string,
        path: string,
    }
}

export class RemoveResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): FileObjects | undefined;
    setData(value?: FileObjects): RemoveResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): RemoveResponse;

    getRemoveOneOfCase(): RemoveResponse.RemoveOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveResponse;
    static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
    export type AsObject = {
        data?: FileObjects.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum RemoveOneOfCase {
        REMOVE_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class FileObjects extends jspb.Message { 
    clearFileobjectsList(): void;
    getFileobjectsList(): Array<FileObject>;
    setFileobjectsList(value: Array<FileObject>): FileObjects;
    addFileobjects(value?: FileObject, index?: number): FileObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileObjects.AsObject;
    static toObject(includeInstance: boolean, msg: FileObjects): FileObjects.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileObjects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileObjects;
    static deserializeBinaryFromReader(message: FileObjects, reader: jspb.BinaryReader): FileObjects;
}

export namespace FileObjects {
    export type AsObject = {
        fileobjectsList: Array<FileObject.AsObject>,
    }
}

export class FileObject extends jspb.Message { 
    getName(): string;
    setName(value: string): FileObject;
    getBucketId(): string;
    setBucketId(value: string): FileObject;
    getOwner(): string;
    setOwner(value: string): FileObject;
    getId(): string;
    setId(value: string): FileObject;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): FileObject;
    getCreatedAt(): string;
    setCreatedAt(value: string): FileObject;
    getLastAccessedAt(): string;
    setLastAccessedAt(value: string): FileObject;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasBuckets(): boolean;
    clearBuckets(): void;
    getBuckets(): Bucket | undefined;
    setBuckets(value?: Bucket): FileObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileObject.AsObject;
    static toObject(includeInstance: boolean, msg: FileObject): FileObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileObject;
    static deserializeBinaryFromReader(message: FileObject, reader: jspb.BinaryReader): FileObject;
}

export namespace FileObject {
    export type AsObject = {
        name: string,
        bucketId: string,
        owner: string,
        id: string,
        updatedAt: string,
        createdAt: string,
        lastAccessedAt: string,

        metadataMap: Array<[string, string]>,
        buckets?: Bucket.AsObject,
    }
}

export class Bucket extends jspb.Message { 
    getId(): string;
    setId(value: string): Bucket;
    getName(): string;
    setName(value: string): Bucket;
    getOwner(): string;
    setOwner(value: string): Bucket;
    getCreatedAt(): string;
    setCreatedAt(value: string): Bucket;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Bucket;
    getPublic(): boolean;
    setPublic(value: boolean): Bucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bucket.AsObject;
    static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bucket;
    static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
}

export namespace Bucket {
    export type AsObject = {
        id: string,
        name: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
        pb_public: boolean,
    }
}

export class RemoveRequest extends jspb.Message { 
    getBucketid(): string;
    setBucketid(value: string): RemoveRequest;
    clearPathsList(): void;
    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): RemoveRequest;
    addPaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRequest;
    static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
    export type AsObject = {
        bucketid: string,
        pathsList: Array<string>,
    }
}

export class ListResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): FileObjects | undefined;
    setData(value?: FileObjects): ListResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): ListResponse;

    getListOneOfCase(): ListResponse.ListOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResponse;
    static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
    export type AsObject = {
        data?: FileObjects.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum ListOneOfCase {
        LIST_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class ListRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): ListRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SearchOptions | undefined;
    setOptions(value?: SearchOptions): ListRequest;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): FetchParameters | undefined;
    setParameters(value?: FetchParameters): ListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRequest;
    static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
    export type AsObject = {
        path: string,
        options?: SearchOptions.AsObject,
        parameters?: FetchParameters.AsObject,
    }
}

export class SearchOptions extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): SearchOptions;
    getOffset(): number;
    setOffset(value: number): SearchOptions;

    hasSortby(): boolean;
    clearSortby(): void;
    getSortby(): SortBy | undefined;
    setSortby(value?: SortBy): SearchOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SearchOptions): SearchOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchOptions;
    static deserializeBinaryFromReader(message: SearchOptions, reader: jspb.BinaryReader): SearchOptions;
}

export namespace SearchOptions {
    export type AsObject = {
        limit: number,
        offset: number,
        sortby?: SortBy.AsObject,
    }
}

export class SortBy extends jspb.Message { 
    getColumn(): string;
    setColumn(value: string): SortBy;
    getOrder(): string;
    setOrder(value: string): SortBy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SortBy.AsObject;
    static toObject(includeInstance: boolean, msg: SortBy): SortBy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SortBy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SortBy;
    static deserializeBinaryFromReader(message: SortBy, reader: jspb.BinaryReader): SortBy;
}

export namespace SortBy {
    export type AsObject = {
        column: string,
        order: string,
    }
}

export class FetchParameters extends jspb.Message { 

    hasSignal(): boolean;
    clearSignal(): void;
    getSignal(): AbortSignal | undefined;
    setSignal(value?: AbortSignal): FetchParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchParameters.AsObject;
    static toObject(includeInstance: boolean, msg: FetchParameters): FetchParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FetchParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FetchParameters;
    static deserializeBinaryFromReader(message: FetchParameters, reader: jspb.BinaryReader): FetchParameters;
}

export namespace FetchParameters {
    export type AsObject = {
        signal?: AbortSignal.AsObject,
    }
}

export class AbortSignal extends jspb.Message { 
    getAborted(): boolean;
    setAborted(value: boolean): AbortSignal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbortSignal.AsObject;
    static toObject(includeInstance: boolean, msg: AbortSignal): AbortSignal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbortSignal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbortSignal;
    static deserializeBinaryFromReader(message: AbortSignal, reader: jspb.BinaryReader): AbortSignal;
}

export namespace AbortSignal {
    export type AsObject = {
        aborted: boolean,
    }
}
