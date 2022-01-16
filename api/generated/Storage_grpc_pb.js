// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var StorageDTO_pb = require('./StorageDTO_pb.js');

function serialize_supabase_v1_CreateSignedUrlRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.CreateSignedUrlRequest)) {
    throw new Error('Expected argument of type supabase.v1.CreateSignedUrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_CreateSignedUrlRequest(buffer_arg) {
  return StorageDTO_pb.CreateSignedUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_CreateSignedUrlResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.CreateSignedUrlResponse)) {
    throw new Error('Expected argument of type supabase.v1.CreateSignedUrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_CreateSignedUrlResponse(buffer_arg) {
  return StorageDTO_pb.CreateSignedUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_DownloadRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.DownloadRequest)) {
    throw new Error('Expected argument of type supabase.v1.DownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_DownloadRequest(buffer_arg) {
  return StorageDTO_pb.DownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_DownloadResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.DownloadResponse)) {
    throw new Error('Expected argument of type supabase.v1.DownloadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_DownloadResponse(buffer_arg) {
  return StorageDTO_pb.DownloadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_GetPublicUrlRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.GetPublicUrlRequest)) {
    throw new Error('Expected argument of type supabase.v1.GetPublicUrlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_GetPublicUrlRequest(buffer_arg) {
  return StorageDTO_pb.GetPublicUrlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_GetPublicUrlResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.GetPublicUrlResponse)) {
    throw new Error('Expected argument of type supabase.v1.GetPublicUrlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_GetPublicUrlResponse(buffer_arg) {
  return StorageDTO_pb.GetPublicUrlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_ListRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.ListRequest)) {
    throw new Error('Expected argument of type supabase.v1.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_ListRequest(buffer_arg) {
  return StorageDTO_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_ListResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.ListResponse)) {
    throw new Error('Expected argument of type supabase.v1.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_ListResponse(buffer_arg) {
  return StorageDTO_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_MoveRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.MoveRequest)) {
    throw new Error('Expected argument of type supabase.v1.MoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_MoveRequest(buffer_arg) {
  return StorageDTO_pb.MoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_MoveResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.MoveResponse)) {
    throw new Error('Expected argument of type supabase.v1.MoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_MoveResponse(buffer_arg) {
  return StorageDTO_pb.MoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_RemoveRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.RemoveRequest)) {
    throw new Error('Expected argument of type supabase.v1.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_RemoveRequest(buffer_arg) {
  return StorageDTO_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_RemoveResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.RemoveResponse)) {
    throw new Error('Expected argument of type supabase.v1.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_RemoveResponse(buffer_arg) {
  return StorageDTO_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_UploadRequest(arg) {
  if (!(arg instanceof StorageDTO_pb.UploadRequest)) {
    throw new Error('Expected argument of type supabase.v1.UploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_UploadRequest(buffer_arg) {
  return StorageDTO_pb.UploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_supabase_v1_UploadResponse(arg) {
  if (!(arg instanceof StorageDTO_pb.UploadResponse)) {
    throw new Error('Expected argument of type supabase.v1.UploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_supabase_v1_UploadResponse(buffer_arg) {
  return StorageDTO_pb.UploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StorageServiceService = exports.StorageServiceService = {
  upload: {
    path: '/supabase.v1.StorageService/Upload',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.UploadRequest,
    responseType: StorageDTO_pb.UploadResponse,
    requestSerialize: serialize_supabase_v1_UploadRequest,
    requestDeserialize: deserialize_supabase_v1_UploadRequest,
    responseSerialize: serialize_supabase_v1_UploadResponse,
    responseDeserialize: deserialize_supabase_v1_UploadResponse,
  },
  update: {
    path: '/supabase.v1.StorageService/Update',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.UploadRequest,
    responseType: StorageDTO_pb.UploadResponse,
    requestSerialize: serialize_supabase_v1_UploadRequest,
    requestDeserialize: deserialize_supabase_v1_UploadRequest,
    responseSerialize: serialize_supabase_v1_UploadResponse,
    responseDeserialize: deserialize_supabase_v1_UploadResponse,
  },
  move: {
    path: '/supabase.v1.StorageService/Move',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.MoveRequest,
    responseType: StorageDTO_pb.MoveResponse,
    requestSerialize: serialize_supabase_v1_MoveRequest,
    requestDeserialize: deserialize_supabase_v1_MoveRequest,
    responseSerialize: serialize_supabase_v1_MoveResponse,
    responseDeserialize: deserialize_supabase_v1_MoveResponse,
  },
  createSignedUrl: {
    path: '/supabase.v1.StorageService/CreateSignedUrl',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.CreateSignedUrlRequest,
    responseType: StorageDTO_pb.CreateSignedUrlResponse,
    requestSerialize: serialize_supabase_v1_CreateSignedUrlRequest,
    requestDeserialize: deserialize_supabase_v1_CreateSignedUrlRequest,
    responseSerialize: serialize_supabase_v1_CreateSignedUrlResponse,
    responseDeserialize: deserialize_supabase_v1_CreateSignedUrlResponse,
  },
  download: {
    path: '/supabase.v1.StorageService/Download',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.DownloadRequest,
    responseType: StorageDTO_pb.DownloadResponse,
    requestSerialize: serialize_supabase_v1_DownloadRequest,
    requestDeserialize: deserialize_supabase_v1_DownloadRequest,
    responseSerialize: serialize_supabase_v1_DownloadResponse,
    responseDeserialize: deserialize_supabase_v1_DownloadResponse,
  },
  getPublicUrl: {
    path: '/supabase.v1.StorageService/GetPublicUrl',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.GetPublicUrlRequest,
    responseType: StorageDTO_pb.GetPublicUrlResponse,
    requestSerialize: serialize_supabase_v1_GetPublicUrlRequest,
    requestDeserialize: deserialize_supabase_v1_GetPublicUrlRequest,
    responseSerialize: serialize_supabase_v1_GetPublicUrlResponse,
    responseDeserialize: deserialize_supabase_v1_GetPublicUrlResponse,
  },
  remove: {
    path: '/supabase.v1.StorageService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.RemoveRequest,
    responseType: StorageDTO_pb.RemoveResponse,
    requestSerialize: serialize_supabase_v1_RemoveRequest,
    requestDeserialize: deserialize_supabase_v1_RemoveRequest,
    responseSerialize: serialize_supabase_v1_RemoveResponse,
    responseDeserialize: deserialize_supabase_v1_RemoveResponse,
  },
  list: {
    path: '/supabase.v1.StorageService/List',
    requestStream: false,
    responseStream: false,
    requestType: StorageDTO_pb.ListRequest,
    responseType: StorageDTO_pb.ListResponse,
    requestSerialize: serialize_supabase_v1_ListRequest,
    requestDeserialize: deserialize_supabase_v1_ListRequest,
    responseSerialize: serialize_supabase_v1_ListResponse,
    responseDeserialize: deserialize_supabase_v1_ListResponse,
  },
};

exports.StorageServiceClient = grpc.makeGenericClientConstructor(StorageServiceService);
