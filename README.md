# supabase-clients-tests

This is a draft project. Just a prototype to show one of possible ways to test [Supabase](https://github.com/supabase/supabase) client libraries.

## How it is supposed to work

![Architecture](/docs/scheme.png)

We have typescript tests (`/tests`).

Framework provides (`/framework`):

- interface IClient for abstract supabase client. Supabase-js is compatible with it by default and can be used in tests. (`/framework/client`)
- GrpcClient implementation of IClient which transfers IClient methods' calls to a remote client library using grpc calls. (`/framework/grpc-client`)

Proto files that are used to generate TS client for using in tests and server for adapter in aby desired programming language. (`/api`).

Adapter services. We can generate grpc servers in any language. It's only purpose is to translate requests from tests to language specific supabase library. (`/js-adapter, ...`).

To run tests:

1. you should start Supabase using original docker-compose for example,
2. then you should run adapter service,
3. run tests,
4. you did good!

Useful commands:

To generate js/ts files from proto

```
yarn codegen
```

Don't forget to lint

```
yarn lint
```

Run tests for supabase

```
yarn test
```

## WIP

This is just a concept repo to show the structure and the idea, it may not be working out of the box
