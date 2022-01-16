import { ApiError, Provider, Session, User, UserAttributes } from '@supabase/supabase-js'

export interface IGoTrueApi {
  /**
   * Creates a new user.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @param attributes The data you want to create the user with.
   * @param jwt A valid JWT. Must be a full-access API key (e.g. service_role key).
   */
  createUser(
    attributes: UserAttributes
  ): Promise<{ data: null; error: ApiError } | { data: User; error: null }>

  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  listUsers(): Promise<{ data: null; error: ApiError } | { data: User[]; error: null }>

  /**
   * Creates a new user using their email address.
   * @param email The email address of the user.
   * @param password The password of the user.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param data Optional user metadata.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  signUpWithEmail(
    email: string,
    password: string,
    options: {
      redirectTo?: string
      data?: object
    }
  ): Promise<{ data: Session | User | null; error: ApiError | null }>

  /**
   * Logs in an existing user using their email address.
   * @param email The email address of the user.
   * @param password The password of the user.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   */
  signInWithEmail(
    email: string,
    password: string,
    options: {
      redirectTo?: string
    }
  ): Promise<{ data: Session | null; error: ApiError | null }>

  /**
   * Signs up a new user using their phone number and a password.
   * @param phone The phone number of the user.
   * @param password The password of the user.
   * @param data Optional user metadata.
   */
  signUpWithPhone(
    phone: string,
    password: string,
    options: {
      data?: object
    }
  ): Promise<{ data: Session | User | null; error: ApiError | null }>

  /**
   * Logs in an existing user using their phone number and password.
   * @param phone The phone number of the user.
   * @param password The password of the user.
   */
  signInWithPhone(
    phone: string,
    password: string
  ): Promise<{ data: Session | null; error: ApiError | null }>

  /**
   * Sends a magic login link to an email address.
   * @param email The email address of the user.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   */
  sendMagicLinkEmail(
    email: string,
    options: {
      redirectTo?: string
    }
  ): Promise<{ data: any | null; error: ApiError | null }>

  /**
   * Sends a mobile OTP via SMS. Will register the account if it doesn't already exist
   * @param phone The user's phone number WITH international prefix
   */
  sendMobileOTP(phone: string): Promise<{ data: any | null; error: ApiError | null }>

  /**
   * Send User supplied Mobile OTP to be verified
   * @param phone The user's phone number WITH international prefix
   * @param token token that user was sent to their mobile phone
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   */
  verifyMobileOTP(
    phone: string,
    token: string,
    options: {
      redirectTo?: string
    }
  ): Promise<{ data: Session | User | null; error: ApiError | null }>

  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param data Optional user metadata
   */
  inviteUserByEmail(
    email: string,
    options: {
      redirectTo?: string
      data?: object
    }
  ): Promise<{ data: User | null; error: ApiError | null }>

  /**
   * Sends a reset request to an email address.
   * @param email The email address of the user.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   */
  resetPasswordForEmail(
    email: string,
    options: {
      redirectTo?: string
    }
  ): Promise<{ data: any | null; error: ApiError | null }>

  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   */
  signOut(jwt: string): Promise<{ error: ApiError | null }>

  /**
   * Generates the relevant login URL for a third-party provider.
   * @param provider One of the providers supported by GoTrue.
   * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param scopes A space-separated list of scopes granted to the OAuth application.
   */
  getUrlForProvider(
    provider: Provider,
    options: {
      redirectTo?: string
      scopes?: string
    }
  ): string

  /**
   * Gets the user details.
   * @param jwt A valid, logged-in JWT.
   */
  getUser(
    jwt: string
  ): Promise<{ user: User | null; data: User | null; error: ApiError | null }>

  /**
   * Updates the user data.
   * @param jwt A valid, logged-in JWT.
   * @param attributes The data you want to update.
   */
  updateUser(
    jwt: string,
    attributes: UserAttributes
  ): Promise<{ user: User | null; data: User | null; error: ApiError | null }>

  /**
   * Delete a user. Requires a `service_role` key.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @param uid The user uid you want to remove.
   * @param jwt A valid JWT. Must be a full-access API key (e.g. service_role key).
   */
  deleteUser(
    uid: string,
    jwt: string
  ): Promise<{ user: User | null; data: User | null; error: ApiError | null }>

  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  refreshAccessToken(
    refreshToken: string
  ): Promise<{ data: Session | null; error: ApiError | null }>

  /**
   * Set/delete the auth cookie based on the AuthChangeEvent.
   * Works for Next.js & Express (requires cookie-parser middleware).
   */
  setAuthCookie(req: any, res: any): void

  /**
   * Get user by reading the cookie from the request.
   * Works for Next.js & Express (requires cookie-parser middleware).
   */
  getUserByCookie(req: any): Promise<{
    token: string | null
    user: User | null
    data: User | null
    error: ApiError | null
  }>

  /**
   * Generates links to be sent via email or other.
   * @param type The link type ("signup" or "magiclink" or "recovery" or "invite").
   * @param email The user's email.
   * @param password User password. For signup only.
   * @param data Optional user metadata. For signup only.
   * @param redirectTo The link type ("signup" or "magiclink" or "recovery" or "invite").
   */
  generateLink(
    type: 'signup' | 'magiclink' | 'recovery' | 'invite',
    email: string,
    options: {
      password?: string
      data?: object
      redirectTo?: string
    }
  ): Promise<{ data: Session | User | null; error: ApiError | null }>
}
