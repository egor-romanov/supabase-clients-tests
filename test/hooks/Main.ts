import { createJSClient, IClient } from 'framework/client'
import { AllureHelper } from 'framework/allure/AllureHelper'
import { GrpcSupabaseClient } from 'framework/grpc-client'

const GRPC_URL: string = process.env.GRPC_URL || '50051'
const SUPABASE_URL: string = process.env.SUPABASE_URL || 'localhost:8080'
const SUPABASE_KEY: string = process.env.SUPABASE_KEY || 'abcabcabc'

export default class MainHook {
    client: IClient

    createClient(url = GRPC_URL): IClient {
        // return createJSClient(SUPABASE_URL, SUPABASE_KEY)
        return new GrpcSupabaseClient(url)
    }

    async before(): Promise<void> {
        AllureHelper.createStep('Setup')

        this.client = this.createClient()
    }

    async after(): Promise<void> {
        AllureHelper.createStep('Tear down', () => {
            AllureHelper.createStep('App stop')
        })

        try {
            await this.client.removeAllSubscriptions()
        } catch (err) {
            //continue
        }
    }
}
