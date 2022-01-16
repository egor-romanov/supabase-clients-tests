// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Common_pb = require('./Common_pb.js');
var SubscriptionsDTO_pb = require('./SubscriptionsDTO_pb.js');

function serialize_supabase_v1_Empty(arg) {
  if (!(arg instanceof Common_pb.Empty)) {
    throw new Error('Expected argument of type supabase.v1.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_Empty(buffer_arg) {
  return Common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_ListSubscriptionsResponse(arg) {
  if (!(arg instanceof SubscriptionsDTO_pb.ListSubscriptionsResponse)) {
    throw new Error('Expected argument of type supabase.v1.ListSubscriptionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_ListSubscriptionsResponse(buffer_arg) {
  return SubscriptionsDTO_pb.ListSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_RealtimeSubscription(arg) {
  if (!(arg instanceof SubscriptionsDTO_pb.RealtimeSubscription)) {
    throw new Error('Expected argument of type supabase.v1.RealtimeSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_RealtimeSubscription(buffer_arg) {
  return SubscriptionsDTO_pb.RealtimeSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_RemoveSubscriptionResponse(arg) {
  if (!(arg instanceof SubscriptionsDTO_pb.RemoveSubscriptionResponse)) {
    throw new Error('Expected argument of type supabase.v1.RemoveSubscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_RemoveSubscriptionResponse(buffer_arg) {
  return SubscriptionsDTO_pb.RemoveSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscriptionsServiceService = exports.SubscriptionsServiceService = {
  remove: {
    path: '/supabase.v1.SubscriptionsService/remove',
    requestStream: false,
    responseStream: false,
    requestType: SubscriptionsDTO_pb.RealtimeSubscription,
    responseType: SubscriptionsDTO_pb.RemoveSubscriptionResponse,
    requestSerialize: serialize_supabase_v1_RealtimeSubscription,
    requestDeserialize: deserialize_supabase_v1_RealtimeSubscription,
    responseSerialize: serialize_supabase_v1_RemoveSubscriptionResponse,
    responseDeserialize: deserialize_supabase_v1_RemoveSubscriptionResponse,
  },
  removeAll: {
    path: '/supabase.v1.SubscriptionsService/removeAll',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: SubscriptionsDTO_pb.RemoveSubscriptionResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_RemoveSubscriptionResponse,
    responseDeserialize: deserialize_supabase_v1_RemoveSubscriptionResponse,
  },
  list: {
    path: '/supabase.v1.SubscriptionsService/List',
    requestStream: false,
    responseStream: false,
    requestType: Common_pb.Empty,
    responseType: SubscriptionsDTO_pb.ListSubscriptionsResponse,
    requestSerialize: serialize_supabase_v1_Empty,
    requestDeserialize: deserialize_supabase_v1_Empty,
    responseSerialize: serialize_supabase_v1_ListSubscriptionsResponse,
    responseDeserialize: deserialize_supabase_v1_ListSubscriptionsResponse,
  },
};

exports.SubscriptionsServiceClient = grpc.makeGenericClientConstructor(SubscriptionsServiceService);
