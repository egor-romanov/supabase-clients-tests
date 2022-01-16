// package: supabase.v1
// file: Auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as Auth_pb from "./Auth_pb";
import * as AuthDTO_pb from "./AuthDTO_pb";
import * as Common_pb from "./Common_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IAuthServiceService_ISignUp;
    signIn: IAuthServiceService_ISignIn;
    verifyOTP: IAuthServiceService_IVerifyOTP;
    user: IAuthServiceService_IUser;
    session: IAuthServiceService_ISession;
    refreshSession: IAuthServiceService_IRefreshSession;
    update: IAuthServiceService_IUpdate;
    setSession: IAuthServiceService_ISetSession;
    setAuth: IAuthServiceService_ISetAuth;
    getSessionFromUrl: IAuthServiceService_IGetSessionFromUrl;
    signOut: IAuthServiceService_ISignOut;
    subscribeAuthStateChange: IAuthServiceService_ISubscribeAuthStateChange;
    unsubscribeAuthStateChange: IAuthServiceService_IUnsubscribeAuthStateChange;
}

interface IAuthServiceService_ISignUp extends grpc.MethodDefinition<AuthDTO_pb.SignUpRequest, AuthDTO_pb.SignUpResponse> {
    path: "/supabase.v1.AuthService/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SignUpResponse>;
}
interface IAuthServiceService_ISignIn extends grpc.MethodDefinition<AuthDTO_pb.SignInRequest, AuthDTO_pb.SignInResponse> {
    path: "/supabase.v1.AuthService/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.SignInRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SignInResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SignInResponse>;
}
interface IAuthServiceService_IVerifyOTP extends grpc.MethodDefinition<AuthDTO_pb.VerifyOTPRequest, AuthDTO_pb.VerifyOTPResponse> {
    path: "/supabase.v1.AuthService/VerifyOTP";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.VerifyOTPRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.VerifyOTPRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.VerifyOTPResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.VerifyOTPResponse>;
}
interface IAuthServiceService_IUser extends grpc.MethodDefinition<Common_pb.Empty, AuthDTO_pb.UserResponse> {
    path: "/supabase.v1.AuthService/User";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<AuthDTO_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.UserResponse>;
}
interface IAuthServiceService_ISession extends grpc.MethodDefinition<Common_pb.Empty, AuthDTO_pb.SessionResponse> {
    path: "/supabase.v1.AuthService/Session";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SessionResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SessionResponse>;
}
interface IAuthServiceService_IRefreshSession extends grpc.MethodDefinition<Common_pb.Empty, AuthDTO_pb.RefreshSessionResponse> {
    path: "/supabase.v1.AuthService/RefreshSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<AuthDTO_pb.RefreshSessionResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.RefreshSessionResponse>;
}
interface IAuthServiceService_IUpdate extends grpc.MethodDefinition<AuthDTO_pb.UpdateRequest, AuthDTO_pb.UpdateResponse> {
    path: "/supabase.v1.AuthService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.UpdateResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.UpdateResponse>;
}
interface IAuthServiceService_ISetSession extends grpc.MethodDefinition<AuthDTO_pb.SetSessionRequest, AuthDTO_pb.SetSessionResponse> {
    path: "/supabase.v1.AuthService/SetSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.SetSessionRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.SetSessionRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SetSessionResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SetSessionResponse>;
}
interface IAuthServiceService_ISetAuth extends grpc.MethodDefinition<AuthDTO_pb.SetAuthRequest, AuthDTO_pb.SetAuthResponse> {
    path: "/supabase.v1.AuthService/SetAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.SetAuthRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.SetAuthRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SetAuthResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SetAuthResponse>;
}
interface IAuthServiceService_IGetSessionFromUrl extends grpc.MethodDefinition<AuthDTO_pb.GetSessionFromUrlRequest, AuthDTO_pb.GetSessionFromUrlResponse> {
    path: "/supabase.v1.AuthService/GetSessionFromUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<AuthDTO_pb.GetSessionFromUrlRequest>;
    requestDeserialize: grpc.deserialize<AuthDTO_pb.GetSessionFromUrlRequest>;
    responseSerialize: grpc.serialize<AuthDTO_pb.GetSessionFromUrlResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.GetSessionFromUrlResponse>;
}
interface IAuthServiceService_ISignOut extends grpc.MethodDefinition<Common_pb.Empty, Common_pb.EmptyResponse> {
    path: "/supabase.v1.AuthService/SignOut";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<Common_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<Common_pb.EmptyResponse>;
}
interface IAuthServiceService_ISubscribeAuthStateChange extends grpc.MethodDefinition<Common_pb.Empty, AuthDTO_pb.SubscriveAuthResponse> {
    path: "/supabase.v1.AuthService/SubscribeAuthStateChange";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<Common_pb.Empty>;
    requestDeserialize: grpc.deserialize<Common_pb.Empty>;
    responseSerialize: grpc.serialize<AuthDTO_pb.SubscriveAuthResponse>;
    responseDeserialize: grpc.deserialize<AuthDTO_pb.SubscriveAuthResponse>;
}
interface IAuthServiceService_IUnsubscribeAuthStateChange extends grpc.MethodDefinition<Common_pb.StringId, Common_pb.EmptyResponse> {
    path: "/supabase.v1.AuthService/UnsubscribeAuthStateChange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<Common_pb.StringId>;
    requestDeserialize: grpc.deserialize<Common_pb.StringId>;
    responseSerialize: grpc.serialize<Common_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<Common_pb.EmptyResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    signUp: grpc.handleUnaryCall<AuthDTO_pb.SignUpRequest, AuthDTO_pb.SignUpResponse>;
    signIn: grpc.handleUnaryCall<AuthDTO_pb.SignInRequest, AuthDTO_pb.SignInResponse>;
    verifyOTP: grpc.handleUnaryCall<AuthDTO_pb.VerifyOTPRequest, AuthDTO_pb.VerifyOTPResponse>;
    user: grpc.handleUnaryCall<Common_pb.Empty, AuthDTO_pb.UserResponse>;
    session: grpc.handleUnaryCall<Common_pb.Empty, AuthDTO_pb.SessionResponse>;
    refreshSession: grpc.handleUnaryCall<Common_pb.Empty, AuthDTO_pb.RefreshSessionResponse>;
    update: grpc.handleUnaryCall<AuthDTO_pb.UpdateRequest, AuthDTO_pb.UpdateResponse>;
    setSession: grpc.handleUnaryCall<AuthDTO_pb.SetSessionRequest, AuthDTO_pb.SetSessionResponse>;
    setAuth: grpc.handleUnaryCall<AuthDTO_pb.SetAuthRequest, AuthDTO_pb.SetAuthResponse>;
    getSessionFromUrl: grpc.handleUnaryCall<AuthDTO_pb.GetSessionFromUrlRequest, AuthDTO_pb.GetSessionFromUrlResponse>;
    signOut: grpc.handleUnaryCall<Common_pb.Empty, Common_pb.EmptyResponse>;
    subscribeAuthStateChange: grpc.handleServerStreamingCall<Common_pb.Empty, AuthDTO_pb.SubscriveAuthResponse>;
    unsubscribeAuthStateChange: grpc.handleUnaryCall<Common_pb.StringId, Common_pb.EmptyResponse>;
}

export interface IAuthServiceClient {
    signUp(request: AuthDTO_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: AuthDTO_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: AuthDTO_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signIn(request: AuthDTO_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: AuthDTO_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: AuthDTO_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    user(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    user(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    user(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    session(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    session(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    session(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    refreshSession(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    refreshSession(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    refreshSession(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    update(request: AuthDTO_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: AuthDTO_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: AuthDTO_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    setSession(request: AuthDTO_pb.SetSessionRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    setSession(request: AuthDTO_pb.SetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    setSession(request: AuthDTO_pb.SetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    setAuth(request: AuthDTO_pb.SetAuthRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    setAuth(request: AuthDTO_pb.SetAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    setAuth(request: AuthDTO_pb.SetAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    signOut(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    signOut(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    signOut(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    subscribeAuthStateChange(request: Common_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<AuthDTO_pb.SubscriveAuthResponse>;
    subscribeAuthStateChange(request: Common_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<AuthDTO_pb.SubscriveAuthResponse>;
    unsubscribeAuthStateChange(request: Common_pb.StringId, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    unsubscribeAuthStateChange(request: Common_pb.StringId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    unsubscribeAuthStateChange(request: Common_pb.StringId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signUp(request: AuthDTO_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: AuthDTO_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: AuthDTO_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: AuthDTO_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: AuthDTO_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: AuthDTO_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    public verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    public verifyOTP(request: AuthDTO_pb.VerifyOTPRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.VerifyOTPResponse) => void): grpc.ClientUnaryCall;
    public user(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public user(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public user(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public session(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    public session(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    public session(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SessionResponse) => void): grpc.ClientUnaryCall;
    public refreshSession(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    public refreshSession(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    public refreshSession(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.RefreshSessionResponse) => void): grpc.ClientUnaryCall;
    public update(request: AuthDTO_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: AuthDTO_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: AuthDTO_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public setSession(request: AuthDTO_pb.SetSessionRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    public setSession(request: AuthDTO_pb.SetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    public setSession(request: AuthDTO_pb.SetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetSessionResponse) => void): grpc.ClientUnaryCall;
    public setAuth(request: AuthDTO_pb.SetAuthRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    public setAuth(request: AuthDTO_pb.SetAuthRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    public setAuth(request: AuthDTO_pb.SetAuthRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.SetAuthResponse) => void): grpc.ClientUnaryCall;
    public getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    public getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    public getSessionFromUrl(request: AuthDTO_pb.GetSessionFromUrlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: AuthDTO_pb.GetSessionFromUrlResponse) => void): grpc.ClientUnaryCall;
    public signOut(request: Common_pb.Empty, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public signOut(request: Common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public signOut(request: Common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public subscribeAuthStateChange(request: Common_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<AuthDTO_pb.SubscriveAuthResponse>;
    public subscribeAuthStateChange(request: Common_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<AuthDTO_pb.SubscriveAuthResponse>;
    public unsubscribeAuthStateChange(request: Common_pb.StringId, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public unsubscribeAuthStateChange(request: Common_pb.StringId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public unsubscribeAuthStateChange(request: Common_pb.StringId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: Common_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
}
