// package: supabase.v1
// file: SubscriptionsDTO.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";

export class RemoveSubscriptionResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): RemoveSubscriptionData | undefined;
    setData(value?: RemoveSubscriptionData): RemoveSubscriptionResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): RemoveSubscriptionResponse;

    getRemovesubscriptionOneOfCase(): RemoveSubscriptionResponse.RemovesubscriptionOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveSubscriptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveSubscriptionResponse): RemoveSubscriptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveSubscriptionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveSubscriptionResponse;
    static deserializeBinaryFromReader(message: RemoveSubscriptionResponse, reader: jspb.BinaryReader): RemoveSubscriptionResponse;
}

export namespace RemoveSubscriptionResponse {
    export type AsObject = {
        data?: RemoveSubscriptionData.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum RemovesubscriptionOneOfCase {
        REMOVESUBSCRIPTION_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class RemoveSubscriptionData extends jspb.Message { 
    getOpensubscriptions(): number;
    setOpensubscriptions(value: number): RemoveSubscriptionData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveSubscriptionData.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveSubscriptionData): RemoveSubscriptionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveSubscriptionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveSubscriptionData;
    static deserializeBinaryFromReader(message: RemoveSubscriptionData, reader: jspb.BinaryReader): RemoveSubscriptionData;
}

export namespace RemoveSubscriptionData {
    export type AsObject = {
        opensubscriptions: number,
    }
}

export class RealtimeSubscription extends jspb.Message { 
    getId(): string;
    setId(value: string): RealtimeSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RealtimeSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: RealtimeSubscription): RealtimeSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RealtimeSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RealtimeSubscription;
    static deserializeBinaryFromReader(message: RealtimeSubscription, reader: jspb.BinaryReader): RealtimeSubscription;
}

export namespace RealtimeSubscription {
    export type AsObject = {
        id: string,
    }
}

export class ListSubscriptionsResponse extends jspb.Message { 

    hasRealtimesubscriptions(): boolean;
    clearRealtimesubscriptions(): void;
    getRealtimesubscriptions(): RealtimeSubscriptions | undefined;
    setRealtimesubscriptions(value?: RealtimeSubscriptions): ListSubscriptionsResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): ListSubscriptionsResponse;

    getListsubscriptionsOneOfCase(): ListSubscriptionsResponse.ListsubscriptionsOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
    static deserializeBinaryFromReader(message: ListSubscriptionsResponse, reader: jspb.BinaryReader): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
    export type AsObject = {
        realtimesubscriptions?: RealtimeSubscriptions.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum ListsubscriptionsOneOfCase {
        LISTSUBSCRIPTIONS_ONE_OF_NOT_SET = 0,
        REALTIMESUBSCRIPTIONS = 1,
        ERROR = 2,
    }

}

export class RealtimeSubscriptions extends jspb.Message { 
    clearIdList(): void;
    getIdList(): Array<string>;
    setIdList(value: Array<string>): RealtimeSubscriptions;
    addId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RealtimeSubscriptions.AsObject;
    static toObject(includeInstance: boolean, msg: RealtimeSubscriptions): RealtimeSubscriptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RealtimeSubscriptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RealtimeSubscriptions;
    static deserializeBinaryFromReader(message: RealtimeSubscriptions, reader: jspb.BinaryReader): RealtimeSubscriptions;
}

export namespace RealtimeSubscriptions {
    export type AsObject = {
        idList: Array<string>,
    }
}
