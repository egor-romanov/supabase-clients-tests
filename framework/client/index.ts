import { step } from 'ts-test-decorators'
import { SupabaseClient, SupabaseClientOptions } from '@supabase/supabase-js'

import { IStorageClient } from './IStorageClient'
import { ISupabaseQueryBuilder } from './ISupabaseQueryBuilder'
import { IPostgrestFilterBuilder } from './IPostgrestFilterBuider'
import { IRealtimeSubscription } from './IRealtimeSubscription'
import { ISupabaseAuthClient } from './ISupabaseAuthClient'


export interface IClient {

    get auth(): ISupabaseAuthClient

    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */
    get storage(): IStorageClient

    /**
     * Perform a table operation.
     *
     * @param table The table name to operate on.
     */
    from<T = any>(table: string): ISupabaseQueryBuilder<T>

    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head   When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     *
     */
    rpc<T = any>(
      fn: string,
      params?: object,
      { head, count, }?: { head?: boolean; count?: null | 'exact' | 'planned' | 'estimated' },
    ): IPostgrestFilterBuilder<T>

    /**
     * Remove all subscriptions.
     */
    removeAllSubscriptions(): Promise<unknown>

    /**
     * Removes an active subscription and returns the number of open connections.
     *
     * @param subscription The subscription you want to remove.
     */
    removeSubscription(subscription: IRealtimeSubscription): Promise<unknown>

    /**
     * Returns an array of all your subscriptions.
     */
    getSubscriptions(): IRealtimeSubscription[] | Promise<IRealtimeSubscription[]>
}

/**
 * Creates a new Supabase Client.
*/
export function createJSClient(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions
): IClient {
    step(`Creating client: ${supabaseUrl}, ${JSON.stringify(options)}`)
    return new SupabaseClient(supabaseUrl, supabaseKey, options)
}

