// source: Enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.supabase.v1.AUTH_EVENT_TYPE', null, global);
goog.exportSymbol('proto.supabase.v1.PROVIDER', null, global);
/**
 * @enum {number}
 */
proto.supabase.v1.PROVIDER = {
  AZURE: 0,
  SLACK: 1,
  BITBUCKET: 2,
  FACEBOOK: 3,
  GITHUB: 4,
  GITLAB: 5,
  GOOGLE: 6,
  TWITTER: 7,
  APPLE: 8,
  DISCORD: 9,
  TWITCH: 10,
  SPOTIFY: 12
};

/**
 * @enum {number}
 */
proto.supabase.v1.AUTH_EVENT_TYPE = {
  PASSWORD_RECOVERY: 0,
  TOKEN_REFRESHED: 1,
  SIGNED_IN: 2,
  SIGNED_OUT: 3,
  USER_UPDATED: 4,
  USER_DELETED: 5
};

goog.object.extend(exports, proto.supabase.v1);
