#!/usr/bin/env bash

PROTO_DEST=./api/generated

rm -rf $PROTO_DEST
mkdir ${PROTO_DEST}

yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./api/proto \
    api/proto/*.proto

yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    -I ./api/proto \
    api/proto/*.proto
