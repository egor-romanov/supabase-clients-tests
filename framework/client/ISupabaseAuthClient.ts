import {
    ApiError,
    AuthChangeEvent,
    Provider,
    Session,
    Subscription,
    User,
    UserAttributes,
    UserCredentials,
    VerifyOTPParams } from '@supabase/supabase-js'
import { IGoTrueApi } from './IGoTrueApi'

export interface ISupabaseAuthClient {
  get api(): IGoTrueApi

  /**
   * Creates a new user.
   * @type UserCredentials
   * @param email The user's email address.
   * @param password The user's password.
   * @param phone The user's phone number.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param data Optional user metadata.
   */
   signUp(
    { email, password, phone }: UserCredentials,
    options: {
      redirectTo?: string
      data?: object
    }
  ): Promise<{
    user: User | null
    session: Session | null
    error: ApiError | null
  }>

  /**
   * Log in an existing user, or login via a third-party provider.
   * @type UserCredentials
   * @param email The user's email address.
   * @param password The user's password.
   * @param refreshToken A valid refresh token that was returned on login.
   * @param provider One of the providers supported by GoTrue.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param scopes A space-separated list of scopes granted to the OAuth application.
   */
  signIn(
    { email, phone, password, refreshToken, provider }: UserCredentials,
    options: {
      redirectTo?: string
      scopes?: string
    }
  ): Promise<{
    session: Session | null
    user: User | null
    provider?: Provider
    url?: string | null
    error: ApiError | null
  }>

  /**
   * Log in a user given a User supplied OTP received via mobile.
   * @param phone The user's phone number.
   * @param token The user's password.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   */
  verifyOTP(
    { phone, token }: VerifyOTPParams,
    options: {
      redirectTo?: string
    }
  ): Promise<{
    user: User | null
    session: Session | null
    error: ApiError | null
  }>

  /**
   * Inside a browser context, `user()` will return the user data, if there is a logged in user.
   *
   * For server-side management, you can get a user through `auth.api.getUserByCookie()`
   */
  user(): User | null

  /**
   * Returns the session data, if there is an active session.
   */
  session(): Session | null

  /**
   * Force refreshes the session including the user data in case it was updated in a different session.
   */
  refreshSession(): Promise<{
    data: Session | null
    user: User | null
    error: ApiError | null
  }>

  /**
   * Updates user data, if there is a logged in user.
   */
  update(
    attributes: UserAttributes
  ): Promise<{ data: User | null; user: User | null; error: ApiError | null }>

  /**
   * Sets the session data from refresh_token and returns current Session and Error
   * @param refresh_token a JWT token
   */
  setSession(
    refresh_token: string
  ): Promise<{ session: Session | null; error: ApiError | null }>

  /**
   * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
   * @param access_token a jwt access token
   */
  setAuth(access_token: string): Session

  /**
   * Gets the session data from a URL string
   * @param options.storeSession Optionally store the session in the browser
   */
  getSessionFromUrl(options?: {
    storeSession?: boolean
  }): Promise<{ data: Session | null; error: ApiError | null }>

  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session
   * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
   *
   * For server-side management, you can disable sessions by passing a JWT through to `auth.api.signOut(JWT: string)`
   */
  signOut(): Promise<{ error: ApiError | null }>

  /**
   * Receive a notification every time an auth event happens.
   * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
   */
  onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void): {
    data: Subscription | null
    error: ApiError | null
  }
}
