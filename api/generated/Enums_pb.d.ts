// package: supabase.v1
// file: Enums.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export enum PROVIDER {
    AZURE = 0,
    SLACK = 1,
    BITBUCKET = 2,
    FACEBOOK = 3,
    GITHUB = 4,
    GITLAB = 5,
    GOOGLE = 6,
    TWITTER = 7,
    APPLE = 8,
    DISCORD = 9,
    TWITCH = 10,
    SPOTIFY = 12,
}

export enum AUTH_EVENT_TYPE {
    PASSWORD_RECOVERY = 0,
    TOKEN_REFRESHED = 1,
    SIGNED_IN = 2,
    SIGNED_OUT = 3,
    USER_UPDATED = 4,
    USER_DELETED = 5,
}
