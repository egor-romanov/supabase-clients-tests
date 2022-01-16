import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'
import { SupabaseClient } from '@supabase/supabase-js'

import {
    SignUpRequest,
    SignUpResponse,
    SignInRequest,
    SignInResponse,
    VerifyOTPRequest,
    VerifyOTPResponse,
    UserResponse,
    SessionResponse,
    RefreshSessionResponse,
    UpdateRequest,
    UpdateResponse,
    SetSessionRequest,
    SetSessionResponse,
    SetAuthRequest,
    SetAuthResponse,
    GetSessionFromUrlRequest,
    GetSessionFromUrlResponse,
    SubscriveAuthResponse,
    UserSession
} from 'api/generated/AuthDTO_pb'
import { IAuthServiceServer } from 'api/generated/Auth_grpc_pb'
import { Empty, EmptyResponse, Error as CommonError, StringId } from 'api/generated/Common_pb'
import { assert } from 'chai'
import { fromSupaSession, fromSupaUser } from 'framework/grpc-client/converters'

export class AuthService implements IAuthServiceServer {
    private supabase: SupabaseClient
    constructor(supabase: SupabaseClient) {
        this.supabase = supabase
    }

    async signUp(
        call: ServerUnaryCall<SignUpRequest, SignUpResponse>, callback: sendUnaryData<SignUpResponse>
    ): Promise<void> {
        const creds = {
            email: call.request.getUsercredentials().getEmail(),
            password: call.request.getUsercredentials().getPassword(),
            phone: call.request.getUsercredentials().getPhone()
        }
        const opts = {
            redirectTo: call.request.getOptions().getRedirectto()
        }
        try {
            const { user, session, error } = await this.supabase.auth.signUp(creds, opts)
            assert.isNull(error)

            const resp = new UserSession()
            resp.setUser(fromSupaUser(user)).setSession(fromSupaSession(session))
            const response = new SignUpResponse()
            response.setSignup(resp)

            callback(null, response)
        } catch (err) {
            const response = new SignUpResponse()
            const error = new CommonError()
            error.setMessage(err.message).setError(err.name).setStack(err.stack)
            response.setError(error)

            callback(null, response)
        }
    }
    signIn(
        call: ServerUnaryCall<SignInRequest, SignUpResponse>, callback:sendUnaryData<SignInResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    verifyOTP(
        call: ServerUnaryCall<VerifyOTPRequest, VerifyOTPResponse>, callback:sendUnaryData<VerifyOTPResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    user(
        call: ServerUnaryCall<Empty, UserResponse>, callback:sendUnaryData<UserResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    session(
        call: ServerUnaryCall<Empty, SessionResponse>, callback:sendUnaryData<SessionResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    refreshSession(
        call: ServerUnaryCall<Empty, RefreshSessionResponse>, callback:sendUnaryData<RefreshSessionResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    update(
        call: ServerUnaryCall<UpdateRequest, UpdateResponse>, callback:sendUnaryData<UpdateResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    setSession(
        call: ServerUnaryCall<SetSessionRequest, SetSessionResponse>, callback:sendUnaryData<SetSessionResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    setAuth(
        call: ServerUnaryCall<SetAuthRequest, SetAuthResponse>, callback:sendUnaryData<SetAuthResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    getSessionFromUrl(
        call: ServerUnaryCall<GetSessionFromUrlRequest, GetSessionFromUrlResponse>, callback:sendUnaryData<GetSessionFromUrlResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    signOut(
        call: ServerUnaryCall<Empty, EmptyResponse>, callback:sendUnaryData<EmptyResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    subscribeAuthStateChange(
        call: ServerUnaryCall<Empty, SubscriveAuthResponse>, callback:sendUnaryData<SubscriveAuthResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
    unsubscribeAuthStateChange(
        call: ServerUnaryCall<StringId, EmptyResponse>, callback:sendUnaryData<EmptyResponse>
    ): Promise<void> {
        throw new Error('Method not implemented.')
    }
}
