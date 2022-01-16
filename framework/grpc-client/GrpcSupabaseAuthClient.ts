import {
    UserCredentials,
    User,
    Session,
    ApiError,
    Provider,
    VerifyOTPParams,
    UserAttributes,
    AuthChangeEvent,
    Subscription
} from '@supabase/supabase-js'
import { SignUpOptions, SignUpRequest, UserCredentials as UserCredentialsDTO } from 'api/generated/AuthDTO_pb'

import { AuthServiceClient } from 'api/generated/Auth_grpc_pb'
import { IGoTrueApi } from 'framework/client/IGoTrueApi'
import { ISupabaseAuthClient } from 'framework/client/ISupabaseAuthClient'
import { resolveGrpc } from '.'
import { toSupaSession, toSupaUser } from './converters'

export class GrpcSupabaseAuthClient implements ISupabaseAuthClient{
    private readonly authService: AuthServiceClient

    constructor(service: AuthServiceClient) {
        this.authService = service
    }

    get api(): IGoTrueApi {
        throw new Error('Method not implemented.')
    }
    signUp(
        { email, password, phone }: UserCredentials,
        options: { redirectTo?: string; data?: object; }
    ): Promise<{ user: User; session: Session; error: ApiError; }> {
        const creds = new UserCredentialsDTO()
        creds.setEmail(email).setPassword(password).setPhone(phone)
        const opts = new SignUpOptions()
        opts.setRedirectto(options.redirectTo)
        const req = new SignUpRequest()
        req.setUsercredentials(creds)
        req.setOptions(opts)

        return new Promise<{ user: User; session: Session; error: ApiError; }>(
            (resolve, reject) => {
                this.authService.signUp(req, (err, data) => {
                    resolveGrpc(
                        'messageEventError', req, data, err, reject,
                        () => resolve({
                            user: toSupaUser(data.getSignup().getUser()),
                            session: toSupaSession(data.getSignup().getSession()),
                            error: null,
                        }))
                })
            })
    }
    signIn({ email, phone, password, refreshToken, provider }: UserCredentials, options: { redirectTo?: string; scopes?: string; }): Promise<{ session: Session; user: User; provider?: Provider; url?: string; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    verifyOTP({ phone, token }: VerifyOTPParams, options: { redirectTo?: string; }): Promise<{ user: User; session: Session; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    user(): User {
        throw new Error('Method not implemented.')
    }
    session(): Session {
        throw new Error('Method not implemented.')
    }
    refreshSession(): Promise<{ data: Session; user: User; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    update(attributes: UserAttributes): Promise<{ data: User; user: User; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    setSession(refresh_token: string): Promise<{ session: Session; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    setAuth(access_token: string): Session {
        throw new Error('Method not implemented.')
    }
    getSessionFromUrl(options?: { storeSession?: boolean; }): Promise<{ data: Session; error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    signOut(): Promise<{ error: ApiError; }> {
        throw new Error('Method not implemented.')
    }
    onAuthStateChange(callback: (event: AuthChangeEvent, session: Session) => void): { data: Subscription; error: ApiError; } {
        throw new Error('Method not implemented.')
    }

}
