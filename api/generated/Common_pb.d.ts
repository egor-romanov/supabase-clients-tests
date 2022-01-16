// package: supabase.v1
// file: Common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Error extends jspb.Message { 
    getError(): string;
    setError(value: string): Error;
    getMessage(): string;
    setMessage(value: string): Error;
    getStack(): string;
    setStack(value: string): Error;
    getCode(): number;
    setCode(value: number): Error;
    getType(): Error.ErrorType;
    setType(value: Error.ErrorType): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        error: string,
        message: string,
        stack: string,
        code: number,
        type: Error.ErrorType,
    }

    export enum ErrorType {
    INVALID_PARAMS = 0,
    NOT_CONNECTED = 1,
    MISTYPE_PARAMS = 2,
    SUPABASE = 3,
    TIMEOUT = 4,
    CLOSE_ENTITY = 5,
    VALIDATION = 6,
    }

}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class EmptyResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): Error | undefined;
    setError(value?: Error): EmptyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyResponse;
    static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
    export type AsObject = {
        error?: Error.AsObject,
    }
}

export class StringId extends jspb.Message { 
    getId(): string;
    setId(value: string): StringId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringId.AsObject;
    static toObject(includeInstance: boolean, msg: StringId): StringId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringId;
    static deserializeBinaryFromReader(message: StringId, reader: jspb.BinaryReader): StringId;
}

export namespace StringId {
    export type AsObject = {
        id: string,
    }
}
