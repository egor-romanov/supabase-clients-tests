import { Session, User } from '@supabase/supabase-js'

import { User as UserDTO, Session as SessionDTO, UserIdentity } from 'api/generated/AuthDTO_pb'

export function toSupaUser(dto: UserDTO): User {
    return {
        id: dto.getId(),
        app_metadata: {},
        user_metadata: {},
        aud: dto.getAud(),
        confirmation_sent_at: dto.getConfirmationSentAt(),
        recovery_sent_at: dto.getRecoverySentAt(),
        invited_at: dto.getInvitedAt(),
        action_link: dto.getActionLink(),
        email: dto.getEmail(),
        phone: dto.getPhone(),
        created_at: dto.getCreatedAt(),
        confirmed_at: dto.getConfirmedAt(),
        email_confirmed_at: dto.getEmailConfirmedAt(),
        phone_confirmed_at: dto.getPhoneConfirmedAt(),
        last_sign_in_at: dto.getLastSignInAt(),
        role: dto.getRole(),
        updated_at: dto.getUpdatedAt(),
        identities: dto.getIdentitiesList().map((i) => {
            return {
                id: i.getId(),
                user_id: i.getUserId(),
                identity_data: {},
                provider: i.getProvider(),
                created_at: i.getCreatedAt(),
                last_sign_in_at: i.getLastSignInAt(),
                updated_at: i.getUpdatedAt(),
            }
        }),
    }
}

export function fromSupaUser(dto: User): UserDTO {
    const user = new UserDTO()
    user
        .setActionLink(dto.action_link)
        .setAud(dto.aud)
        .setConfirmationSentAt(dto.confirmation_sent_at)
        .setConfirmedAt(dto.confirmed_at)
        .setCreatedAt(dto.created_at)
        .setEmail(dto.email)
        .setEmailConfirmedAt(dto.email_confirmed_at)
        .setId(dto.id)
        .setIdentitiesList(dto.identities.map(i => {
            const ui = new UserIdentity()
            ui
                .setCreatedAt(i.created_at)
                .setId(i.id)
                .setLastSignInAt(i.last_sign_in_at)
                .setProvider(i.provider)
                .setUpdatedAt(i.updated_at)
                .setUserId(i.user_id)
            return ui
        }))
        .setInvitedAt(dto.invited_at)
        .setLastSignInAt(dto.last_sign_in_at)
        .setPhone(dto.phone)
        .setPhoneConfirmedAt(dto.phone_confirmed_at)
        .setRecoverySentAt(dto.recovery_sent_at)
        .setRole(dto.role)
        .setUpdatedAt(dto.updated_at)
    return user
}

export function toSupaSession(dto: SessionDTO): Session {
    return {
        provider_token: dto.getProviderToken(),
        access_token: dto.getAccessToken(),
        expires_in: dto.getExpiresIn(),
        expires_at: dto.getExpiresAt(),
        refresh_token: dto.getRefreshToken(),
        token_type: dto.getTokenType(),
        user: toSupaUser(dto.getUser()),
    }
}

export function fromSupaSession(dto: Session): SessionDTO {
    const session = new SessionDTO()
    session
        .setAccessToken(dto.access_token)
        .setExpiresAt(dto.expires_at)
        .setExpiresIn(dto.expires_in)
        .setProviderToken(dto.provider_token)
        .setRefreshToken(dto.refresh_token)
        .setTokenType(dto.token_type)
        .setUser(fromSupaUser(dto.user))
    return session
}
