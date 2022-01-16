import {
    SupabaseEventTypes,
    SupabaseRealtimePayload,
} from '@supabase/supabase-js/dist/main/lib/types'

import { IRealtimeSubscription } from './IRealtimeSubscription'

export interface ISupabaseRealtimeClient {
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */
    on(
      event: SupabaseEventTypes,
      callback: (payload: SupabaseRealtimePayload<any>) => void
      ): ISupabaseRealtimeClient

    /**
     * Enables the subscription.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribe(callback: Function): IRealtimeSubscription
}
