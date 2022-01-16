import grpc from '@grpc/grpc-js'
import debug from 'debug'
import { createClient } from '@supabase/supabase-js'

import { AuthServiceService } from 'api/generated/Auth_grpc_pb'
import { StorageServiceService } from 'api/generated/Storage_grpc_pb'
import { SubscriptionsServiceService } from 'api/generated/Subscriptions_grpc_pb'
import { AuthService } from './AuthService'
import { StorageService } from './StorageService'
import { SubscriptionService } from './SubscriptionService'

const logger = debug('')

const HOST = process.env.GRPC_HOST || '0.0.0.0'
const PORT = process.env.GRPC_PORT || '50051'
const SUPABASE_URL = process.env.SUPABASE_URL || 'localhost:8080'
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'abcabcabc'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const server = new grpc.Server()
server.bind(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure())

server.addService({ ...AuthServiceService }, { ...(new AuthService(supabase)) })
server.addService({ ...StorageServiceService }, { ...(new StorageService()) })
server.addService({ ...SubscriptionsServiceService }, { ...(new SubscriptionService()) })

server.start()
logger('Server starts at', `${HOST}:${PORT}`)

