// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var AuthDTO_pb = require('./AuthDTO_pb.js');
var Common_pb = require('./Common_pb.js');

function serialize_supabase_v1_Empty(arg) {
  if (!(arg instanceof Common_pb.Empty)) {
    throw new Error('Expected argument of type supabase.v1.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_Empty(buffer_arg) {
  return Common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_EmptyResponse(arg) {
  if (!(arg instanceof Common_pb.EmptyResponse)) {
    throw new Error('Expected argument of type supabase.v1.EmptyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_EmptyResponse(buffer_arg) {
  return Common_pb.EmptyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_GetSessionFromUrlRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.GetSessionFromUrlRequest)) {
    throw new Error('Expected argument of type supabase.v1.GetSessionFromUrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_GetSessionFromUrlRequest(buffer_arg) {
  return AuthDTO_pb.GetSessionFromUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_GetSessionFromUrlResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.GetSessionFromUrlResponse)) {
    throw new Error('Expected argument of type supabase.v1.GetSessionFromUrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_GetSessionFromUrlResponse(buffer_arg) {
  return AuthDTO_pb.GetSessionFromUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_RefreshSessionResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.RefreshSessionResponse)) {
    throw new Error('Expected argument of type supabase.v1.RefreshSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_RefreshSessionResponse(buffer_arg) {
  return AuthDTO_pb.RefreshSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SessionResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SessionResponse)) {
    throw new Error('Expected argument of type supabase.v1.SessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SessionResponse(buffer_arg) {
  return AuthDTO_pb.SessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SetAuthRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.SetAuthRequest)) {
    throw new Error('Expected argument of type supabase.v1.SetAuthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SetAuthRequest(buffer_arg) {
  return AuthDTO_pb.SetAuthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SetAuthResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SetAuthResponse)) {
    throw new Error('Expected argument of type supabase.v1.SetAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SetAuthResponse(buffer_arg) {
  return AuthDTO_pb.SetAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SetSessionRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.SetSessionRequest)) {
    throw new Error('Expected argument of type supabase.v1.SetSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SetSessionRequest(buffer_arg) {
  return AuthDTO_pb.SetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SetSessionResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SetSessionResponse)) {
    throw new Error('Expected argument of type supabase.v1.SetSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SetSessionResponse(buffer_arg) {
  return AuthDTO_pb.SetSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SignInRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.SignInRequest)) {
    throw new Error('Expected argument of type supabase.v1.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SignInRequest(buffer_arg) {
  return AuthDTO_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SignInResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SignInResponse)) {
    throw new Error('Expected argument of type supabase.v1.SignInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SignInResponse(buffer_arg) {
  return AuthDTO_pb.SignInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SignUpRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.SignUpRequest)) {
    throw new Error('Expected argument of type supabase.v1.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SignUpRequest(buffer_arg) {
  return AuthDTO_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SignUpResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SignUpResponse)) {
    throw new Error('Expected argument of type supabase.v1.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SignUpResponse(buffer_arg) {
  return AuthDTO_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_StringId(arg) {
  if (!(arg instanceof Common_pb.StringId)) {
    throw new Error('Expected argument of type supabase.v1.StringId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_StringId(buffer_arg) {
  return Common_pb.StringId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_SubscriveAuthResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.SubscriveAuthResponse)) {
    throw new Error('Expected argument of type supabase.v1.SubscriveAuthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_SubscriveAuthResponse(buffer_arg) {
  return AuthDTO_pb.SubscriveAuthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_UpdateRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.UpdateRequest)) {
    throw new Error('Expected argument of type supabase.v1.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_UpdateRequest(buffer_arg) {
  return AuthDTO_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_UpdateResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.UpdateResponse)) {
    throw new Error('Expected argument of type supabase.v1.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_UpdateResponse(buffer_arg) {
  return AuthDTO_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_UserResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.UserResponse)) {
    throw new Error('Expected argument of type supabase.v1.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_UserResponse(buffer_arg) {
  return AuthDTO_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_VerifyOTPRequest(arg) {
  if (!(arg instanceof AuthDTO_pb.VerifyOTPRequest)) {
    throw new Error('Expected argument of type supabase.v1.VerifyOTPRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_VerifyOTPRequest(buffer_arg) {
  return AuthDTO_pb.VerifyOTPRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_VerifyOTPResponse(arg) {
  if (!(arg instanceof AuthDTO_pb.VerifyOTPResponse)) {
    throw new Error('Expected argument of type supabase.v1.VerifyOTPResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_VerifyOTPResponse(buffer_arg) {
  return AuthDTO_pb.VerifyOTPResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  signUp: {
    path: '/supabase.v1.AuthService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.SignUpRequest,
    responseType: AuthDTO_pb.SignUpResponse,
    requestSerialize: serialize_supabase_v1_SignUpRequest,
    requestDeserialize: deserialize_supabase_v1_SignUpRequest,
    responseSerialize: serialize_supabase_v1_SignUpResponse,
    responseDeserialize: deserialize_supabase_v1_SignUpResponse,
  },
  signIn: {
    path: '/supabase.v1.AuthService/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.SignInRequest,
    responseType: AuthDTO_pb.SignInResponse,
    requestSerialize: serialize_supabase_v1_SignInRequest,
    requestDeserialize: deserialize_supabase_v1_SignInRequest,
    responseSerialize: serialize_supabase_v1_SignInResponse,
    responseDeserialize: deserialize_supabase_v1_SignInResponse,
  },
  verifyOTP: {
    path: '/supabase.v1.AuthService/VerifyOTP',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.VerifyOTPRequest,
    responseType: AuthDTO_pb.VerifyOTPResponse,
    requestSerialize: serialize_supabase_v1_VerifyOTPRequest,
    requestDeserialize: deserialize_supabase_v1_VerifyOTPRequest,
    responseSerialize: serialize_supabase_v1_VerifyOTPResponse,
    responseDeserialize: deserialize_supabase_v1_VerifyOTPResponse,
  },
  user: {
    path: '/supabase.v1.AuthService/User',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: AuthDTO_pb.UserResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_UserResponse,
    responseDeserialize: deserialize_supabase_v1_UserResponse,
  },
  session: {
    path: '/supabase.v1.AuthService/Session',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: AuthDTO_pb.SessionResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_SessionResponse,
    responseDeserialize: deserialize_supabase_v1_SessionResponse,
  },
  refreshSession: {
    path: '/supabase.v1.AuthService/RefreshSession',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: AuthDTO_pb.RefreshSessionResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_RefreshSessionResponse,
    responseDeserialize: deserialize_supabase_v1_RefreshSessionResponse,
  },
  update: {
    path: '/supabase.v1.AuthService/Update',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.UpdateRequest,
    responseType: AuthDTO_pb.UpdateResponse,
    requestSerialize: serialize_supabase_v1_UpdateRequest,
    requestDeserialize: deserialize_supabase_v1_UpdateRequest,
    responseSerialize: serialize_supabase_v1_UpdateResponse,
    responseDeserialize: deserialize_supabase_v1_UpdateResponse,
  },
  setSession: {
    path: '/supabase.v1.AuthService/SetSession',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.SetSessionRequest,
    responseType: AuthDTO_pb.SetSessionResponse,
    requestSerialize: serialize_supabase_v1_SetSessionRequest,
    requestDeserialize: deserialize_supabase_v1_SetSessionRequest,
    responseSerialize: serialize_supabase_v1_SetSessionResponse,
    responseDeserialize: deserialize_supabase_v1_SetSessionResponse,
  },
  setAuth: {
    path: '/supabase.v1.AuthService/SetAuth',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.SetAuthRequest,
    responseType: AuthDTO_pb.SetAuthResponse,
    requestSerialize: serialize_supabase_v1_SetAuthRequest,
    requestDeserialize: deserialize_supabase_v1_SetAuthRequest,
    responseSerialize: serialize_supabase_v1_SetAuthResponse,
    responseDeserialize: deserialize_supabase_v1_SetAuthResponse,
  },
  getSessionFromUrl: {
    path: '/supabase.v1.AuthService/GetSessionFromUrl',
    requestStream: false,
    responseStream: false,
    requestType: AuthDTO_pb.GetSessionFromUrlRequest,
    responseType: AuthDTO_pb.GetSessionFromUrlResponse,
    requestSerialize: serialize_supabase_v1_GetSessionFromUrlRequest,
    requestDeserialize: deserialize_supabase_v1_GetSessionFromUrlRequest,
    responseSerialize: serialize_supabase_v1_GetSessionFromUrlResponse,
    responseDeserialize: deserialize_supabase_v1_GetSessionFromUrlResponse,
  },
  signOut: {
    path: '/supabase.v1.AuthService/SignOut',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: Common_pb.EmptyResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_EmptyResponse,
    responseDeserialize: deserialize_supabase_v1_EmptyResponse,
  },
  subscribeAuthStateChange: {
    path: '/supabase.v1.AuthService/SubscribeAuthStateChange',
    requestStream: false,
    responseStream: true,
    requestType: Common_pb.Empty,
    responseType: AuthDTO_pb.SubscriveAuthResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_SubscriveAuthResponse,
    responseDeserialize: deserialize_supabase_v1_SubscriveAuthResponse,
  },
  unsubscribeAuthStateChange: {
    path: '/supabase.v1.AuthService/UnsubscribeAuthStateChange',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.StringId,
    responseType: Common_pb.EmptyResponse,
    requestSerialize: serialize_supabase_v1_StringId,
    requestDeserialize: deserialize_supabase_v1_StringId,
    responseSerialize: serialize_supabase_v1_EmptyResponse,
    responseDeserialize: deserialize_supabase_v1_EmptyResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
