// package: supabase.v1
// file: AuthDTO.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";
import * as Enums_pb from "./Enums_pb";

export class SignUpRequest extends jspb.Message { 

    hasUsercredentials(): boolean;
    clearUsercredentials(): void;
    getUsercredentials(): UserCredentials | undefined;
    setUsercredentials(value?: UserCredentials): SignUpRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SignUpOptions | undefined;
    setOptions(value?: SignUpOptions): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        usercredentials?: UserCredentials.AsObject,
        options?: SignUpOptions.AsObject,
    }
}

export class UserCredentials extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UserCredentials;
    getPhone(): string;
    setPhone(value: string): UserCredentials;
    getPassword(): string;
    setPassword(value: string): UserCredentials;
    getRefreshtoken(): string;
    setRefreshtoken(value: string): UserCredentials;
    getProvider(): Enums_pb.PROVIDER;
    setProvider(value: Enums_pb.PROVIDER): UserCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: UserCredentials): UserCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserCredentials;
    static deserializeBinaryFromReader(message: UserCredentials, reader: jspb.BinaryReader): UserCredentials;
}

export namespace UserCredentials {
    export type AsObject = {
        email: string,
        phone: string,
        password: string,
        refreshtoken: string,
        provider: Enums_pb.PROVIDER,
    }
}

export class SignUpOptions extends jspb.Message { 
    getRedirectto(): string;
    setRedirectto(value: string): SignUpOptions;

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpOptions.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpOptions): SignUpOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpOptions;
    static deserializeBinaryFromReader(message: SignUpOptions, reader: jspb.BinaryReader): SignUpOptions;
}

export namespace SignUpOptions {
    export type AsObject = {
        redirectto: string,

        dataMap: Array<[string, string]>,
    }
}

export class SignUpResponse extends jspb.Message { 

    hasSignup(): boolean;
    clearSignup(): void;
    getSignup(): UserSession | undefined;
    setSignup(value?: UserSession): SignUpResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): SignUpResponse;

    getSignupOneOfCase(): SignUpResponse.SignupOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResponse;
    static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
    export type AsObject = {
        signup?: UserSession.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SignupOneOfCase {
        SIGNUP_ONE_OF_NOT_SET = 0,
        SIGNUP = 1,
        ERROR = 2,
    }

}

export class UserSession extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserSession;

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): UserSession;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSession.AsObject;
    static toObject(includeInstance: boolean, msg: UserSession): UserSession.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSession, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSession;
    static deserializeBinaryFromReader(message: UserSession, reader: jspb.BinaryReader): UserSession;
}

export namespace UserSession {
    export type AsObject = {
        user?: User.AsObject,
        session?: Session.AsObject,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getAud(): string;
    setAud(value: string): User;
    getConfirmationSentAt(): string;
    setConfirmationSentAt(value: string): User;
    getRecoverySentAt(): string;
    setRecoverySentAt(value: string): User;
    getInvitedAt(): string;
    setInvitedAt(value: string): User;
    getActionLink(): string;
    setActionLink(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;
    getCreatedAt(): string;
    setCreatedAt(value: string): User;
    getConfirmedAt(): string;
    setConfirmedAt(value: string): User;
    getEmailConfirmedAt(): string;
    setEmailConfirmedAt(value: string): User;
    getPhoneConfirmedAt(): string;
    setPhoneConfirmedAt(value: string): User;
    getLastSignInAt(): string;
    setLastSignInAt(value: string): User;
    getRole(): string;
    setRole(value: string): User;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): User;
    clearIdentitiesList(): void;
    getIdentitiesList(): Array<UserIdentity>;
    setIdentitiesList(value: Array<UserIdentity>): User;
    addIdentities(value?: UserIdentity, index?: number): UserIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        aud: string,
        confirmationSentAt: string,
        recoverySentAt: string,
        invitedAt: string,
        actionLink: string,
        email: string,
        phone: string,
        createdAt: string,
        confirmedAt: string,
        emailConfirmedAt: string,
        phoneConfirmedAt: string,
        lastSignInAt: string,
        role: string,
        updatedAt: string,
        identitiesList: Array<UserIdentity.AsObject>,
    }


    export class AppMetadata extends jspb.Message { 
        getProvider(): string;
        setProvider(value: string): AppMetadata;

        getDataMap(): jspb.Map<string, string>;
        clearDataMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AppMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: AppMetadata): AppMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AppMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AppMetadata;
        static deserializeBinaryFromReader(message: AppMetadata, reader: jspb.BinaryReader): AppMetadata;
    }

    export namespace AppMetadata {
        export type AsObject = {
            provider: string,

            dataMap: Array<[string, string]>,
        }
    }

    export class UserMetadata extends jspb.Message { 

        getDataMap(): jspb.Map<string, string>;
        clearDataMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UserMetadata.AsObject;
        static toObject(includeInstance: boolean, msg: UserMetadata): UserMetadata.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UserMetadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UserMetadata;
        static deserializeBinaryFromReader(message: UserMetadata, reader: jspb.BinaryReader): UserMetadata;
    }

    export namespace UserMetadata {
        export type AsObject = {

            dataMap: Array<[string, string]>,
        }
    }

}

export class UserIdentity extends jspb.Message { 
    getId(): string;
    setId(value: string): UserIdentity;
    getUserId(): string;
    setUserId(value: string): UserIdentity;

    getIdentityDataMap(): jspb.Map<string, string>;
    clearIdentityDataMap(): void;
    getProvider(): string;
    setProvider(value: string): UserIdentity;
    getCreatedAt(): string;
    setCreatedAt(value: string): UserIdentity;
    getLastSignInAt(): string;
    setLastSignInAt(value: string): UserIdentity;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): UserIdentity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserIdentity.AsObject;
    static toObject(includeInstance: boolean, msg: UserIdentity): UserIdentity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserIdentity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserIdentity;
    static deserializeBinaryFromReader(message: UserIdentity, reader: jspb.BinaryReader): UserIdentity;
}

export namespace UserIdentity {
    export type AsObject = {
        id: string,
        userId: string,

        identityDataMap: Array<[string, string]>,
        provider: string,
        createdAt: string,
        lastSignInAt: string,
        updatedAt: string,
    }
}

export class Session extends jspb.Message { 
    getProviderToken(): string;
    setProviderToken(value: string): Session;
    getAccessToken(): string;
    setAccessToken(value: string): Session;
    getExpiresIn(): number;
    setExpiresIn(value: number): Session;
    getExpiresAt(): number;
    setExpiresAt(value: number): Session;
    getRefreshToken(): string;
    setRefreshToken(value: string): Session;
    getTokenType(): string;
    setTokenType(value: string): Session;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): Session;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        providerToken: string,
        accessToken: string,
        expiresIn: number,
        expiresAt: number,
        refreshToken: string,
        tokenType: string,
        user?: User.AsObject,
    }
}

export class SignInRequest extends jspb.Message { 

    hasUsercredentials(): boolean;
    clearUsercredentials(): void;
    getUsercredentials(): UserCredentials | undefined;
    setUsercredentials(value?: UserCredentials): SignInRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): SignUpOptions | undefined;
    setOptions(value?: SignUpOptions): SignInRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInRequest;
    static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
    export type AsObject = {
        usercredentials?: UserCredentials.AsObject,
        options?: SignUpOptions.AsObject,
    }
}

export class SignInResponse extends jspb.Message { 

    hasSignin(): boolean;
    clearSignin(): void;
    getSignin(): SignIn | undefined;
    setSignin(value?: SignIn): SignInResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): SignInResponse;

    getSigninOneOfCase(): SignInResponse.SigninOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInResponse;
    static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
    export type AsObject = {
        signin?: SignIn.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SigninOneOfCase {
        SIGNIN_ONE_OF_NOT_SET = 0,
        SIGNIN = 1,
        ERROR = 2,
    }

}

export class SignIn extends jspb.Message { 
    getProvider(): Enums_pb.PROVIDER;
    setProvider(value: Enums_pb.PROVIDER): SignIn;

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): SignIn;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): SignIn;
    getUrl(): string;
    setUrl(value: string): SignIn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignIn.AsObject;
    static toObject(includeInstance: boolean, msg: SignIn): SignIn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignIn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignIn;
    static deserializeBinaryFromReader(message: SignIn, reader: jspb.BinaryReader): SignIn;
}

export namespace SignIn {
    export type AsObject = {
        provider: Enums_pb.PROVIDER,
        session?: Session.AsObject,
        user?: User.AsObject,
        url: string,
    }
}

export class VerifyOTPRequest extends jspb.Message { 

    hasParams(): boolean;
    clearParams(): void;
    getParams(): VerifyOTPParams | undefined;
    setParams(value?: VerifyOTPParams): VerifyOTPRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyOTPRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyOTPRequest): VerifyOTPRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyOTPRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyOTPRequest;
    static deserializeBinaryFromReader(message: VerifyOTPRequest, reader: jspb.BinaryReader): VerifyOTPRequest;
}

export namespace VerifyOTPRequest {
    export type AsObject = {
        params?: VerifyOTPParams.AsObject,
    }


    export class Options extends jspb.Message { 
        getRedirectto(): string;
        setRedirectto(value: string): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            redirectto: string,
        }
    }

}

export class VerifyOTPParams extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): VerifyOTPParams;
    getToken(): string;
    setToken(value: string): VerifyOTPParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyOTPParams.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyOTPParams): VerifyOTPParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyOTPParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyOTPParams;
    static deserializeBinaryFromReader(message: VerifyOTPParams, reader: jspb.BinaryReader): VerifyOTPParams;
}

export namespace VerifyOTPParams {
    export type AsObject = {
        phone: string,
        token: string,
    }
}

export class VerifyOTPResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): UserSession | undefined;
    setData(value?: UserSession): VerifyOTPResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): VerifyOTPResponse;

    getVerifyotpOneOfCase(): VerifyOTPResponse.VerifyotpOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyOTPResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyOTPResponse): VerifyOTPResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyOTPResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyOTPResponse;
    static deserializeBinaryFromReader(message: VerifyOTPResponse, reader: jspb.BinaryReader): VerifyOTPResponse;
}

export namespace VerifyOTPResponse {
    export type AsObject = {
        data?: UserSession.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum VerifyotpOneOfCase {
        VERIFYOTP_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class UserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class SessionResponse extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): SessionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SessionResponse): SessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionResponse;
    static deserializeBinaryFromReader(message: SessionResponse, reader: jspb.BinaryReader): SessionResponse;
}

export namespace SessionResponse {
    export type AsObject = {
        session?: Session.AsObject,
    }
}

export class RefreshSessionResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): UserSession | undefined;
    setData(value?: UserSession): RefreshSessionResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): RefreshSessionResponse;

    getRefreshsessionOneOfCase(): RefreshSessionResponse.RefreshsessionOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshSessionResponse): RefreshSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshSessionResponse;
    static deserializeBinaryFromReader(message: RefreshSessionResponse, reader: jspb.BinaryReader): RefreshSessionResponse;
}

export namespace RefreshSessionResponse {
    export type AsObject = {
        data?: UserSession.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum RefreshsessionOneOfCase {
        REFRESHSESSION_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class UpdateRequest extends jspb.Message { 

    hasAttributes(): boolean;
    clearAttributes(): void;
    getAttributes(): UserAttributes | undefined;
    setAttributes(value?: UserAttributes): UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        attributes?: UserAttributes.AsObject,
    }
}

export class UserAttributes extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UserAttributes;
    getPassword(): string;
    setPassword(value: string): UserAttributes;
    getEmailChangeToken(): string;
    setEmailChangeToken(value: string): UserAttributes;

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserAttributes.AsObject;
    static toObject(includeInstance: boolean, msg: UserAttributes): UserAttributes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserAttributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserAttributes;
    static deserializeBinaryFromReader(message: UserAttributes, reader: jspb.BinaryReader): UserAttributes;
}

export namespace UserAttributes {
    export type AsObject = {
        email: string,
        password: string,
        emailChangeToken: string,

        dataMap: Array<[string, string]>,
    }
}

export class UpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): UserSession | undefined;
    setData(value?: UserSession): UpdateResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): UpdateResponse;

    getSignupOneOfCase(): UpdateResponse.SignupOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResponse;
    static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
    export type AsObject = {
        data?: UserSession.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SignupOneOfCase {
        SIGNUP_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class SetSessionRequest extends jspb.Message { 
    getRefreshtoken(): string;
    setRefreshtoken(value: string): SetSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetSessionRequest): SetSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSessionRequest;
    static deserializeBinaryFromReader(message: SetSessionRequest, reader: jspb.BinaryReader): SetSessionRequest;
}

export namespace SetSessionRequest {
    export type AsObject = {
        refreshtoken: string,
    }
}

export class SetSessionResponse extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): SetSessionResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): SetSessionResponse;

    getSetsessionOneOfCase(): SetSessionResponse.SetsessionOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetSessionResponse): SetSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetSessionResponse;
    static deserializeBinaryFromReader(message: SetSessionResponse, reader: jspb.BinaryReader): SetSessionResponse;
}

export namespace SetSessionResponse {
    export type AsObject = {
        session?: Session.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SetsessionOneOfCase {
        SETSESSION_ONE_OF_NOT_SET = 0,
        SESSION = 1,
        ERROR = 2,
    }

}

export class SetAuthRequest extends jspb.Message { 
    getRefreshtoken(): string;
    setRefreshtoken(value: string): SetAuthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAuthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetAuthRequest): SetAuthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAuthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAuthRequest;
    static deserializeBinaryFromReader(message: SetAuthRequest, reader: jspb.BinaryReader): SetAuthRequest;
}

export namespace SetAuthRequest {
    export type AsObject = {
        refreshtoken: string,
    }
}

export class SetAuthResponse extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): SetAuthResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): SetAuthResponse;

    getSetauthOneOfCase(): SetAuthResponse.SetauthOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetAuthResponse): SetAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAuthResponse;
    static deserializeBinaryFromReader(message: SetAuthResponse, reader: jspb.BinaryReader): SetAuthResponse;
}

export namespace SetAuthResponse {
    export type AsObject = {
        session?: Session.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SetauthOneOfCase {
        SETAUTH_ONE_OF_NOT_SET = 0,
        SESSION = 1,
        ERROR = 2,
    }

}

export class GetSessionFromUrlRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionFromUrlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionFromUrlRequest): GetSessionFromUrlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionFromUrlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionFromUrlRequest;
    static deserializeBinaryFromReader(message: GetSessionFromUrlRequest, reader: jspb.BinaryReader): GetSessionFromUrlRequest;
}

export namespace GetSessionFromUrlRequest {
    export type AsObject = {
    }


    export class Options extends jspb.Message { 
        getStoresession(): boolean;
        setStoresession(value: boolean): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            storesession: boolean,
        }
    }

}

export class GetSessionFromUrlResponse extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): GetSessionFromUrlResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): GetSessionFromUrlResponse;

    getGetsessionfromurlOneOfCase(): GetSessionFromUrlResponse.GetsessionfromurlOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionFromUrlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionFromUrlResponse): GetSessionFromUrlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionFromUrlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionFromUrlResponse;
    static deserializeBinaryFromReader(message: GetSessionFromUrlResponse, reader: jspb.BinaryReader): GetSessionFromUrlResponse;
}

export namespace GetSessionFromUrlResponse {
    export type AsObject = {
        session?: Session.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum GetsessionfromurlOneOfCase {
        GETSESSIONFROMURL_ONE_OF_NOT_SET = 0,
        SESSION = 1,
        ERROR = 2,
    }

}

export class SubscriveAuthResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): SubscriveAuthData | undefined;
    setData(value?: SubscriveAuthData): SubscriveAuthResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): Common_pb.Error | undefined;
    setError(value?: Common_pb.Error): SubscriveAuthResponse;

    getSubscriveauthOneOfCase(): SubscriveAuthResponse.SubscriveauthOneOfCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriveAuthResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriveAuthResponse): SubscriveAuthResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriveAuthResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriveAuthResponse;
    static deserializeBinaryFromReader(message: SubscriveAuthResponse, reader: jspb.BinaryReader): SubscriveAuthResponse;
}

export namespace SubscriveAuthResponse {
    export type AsObject = {
        data?: SubscriveAuthData.AsObject,
        error?: Common_pb.Error.AsObject,
    }

    export enum SubscriveauthOneOfCase {
        SUBSCRIVEAUTH_ONE_OF_NOT_SET = 0,
        DATA = 1,
        ERROR = 2,
    }

}

export class SubscriveAuthData extends jspb.Message { 
    getId(): string;
    setId(value: string): SubscriveAuthData;
    getEvent(): Enums_pb.AUTH_EVENT_TYPE;
    setEvent(value: Enums_pb.AUTH_EVENT_TYPE): SubscriveAuthData;

    hasSession(): boolean;
    clearSession(): void;
    getSession(): Session | undefined;
    setSession(value?: Session): SubscriveAuthData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriveAuthData.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriveAuthData): SubscriveAuthData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriveAuthData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriveAuthData;
    static deserializeBinaryFromReader(message: SubscriveAuthData, reader: jspb.BinaryReader): SubscriveAuthData;
}

export namespace SubscriveAuthData {
    export type AsObject = {
        id: string,
        event: Enums_pb.AUTH_EVENT_TYPE,
        session?: Session.AsObject,
    }
}
