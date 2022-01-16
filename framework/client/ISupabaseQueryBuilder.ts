import { PostgrestResponse } from '@supabase/supabase-js'
import {
    SupabaseEventTypes,
    SupabaseRealtimePayload,
} from '@supabase/supabase-js/dist/main/lib/types'

import { IPostgrestFilterBuilder } from './IPostgrestFilterBuider'
import { ISupabaseRealtimeClient } from './ISupabaseRealtimeClient'

export interface ISupabaseQueryBuilder<T> {
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError(): Partial<ISupabaseQueryBuilder<T>>

    then<TResult1 = PostgrestResponse<T>, TResult2 = never>(
      onfulfilled?: (value: PostgrestResponse<T>) => TResult1 | PromiseLike<TResult1>,
      onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>
    ): PromiseLike<TResult1 | TResult2>

    /**
     * Subscribe to realtime changes in your database.
     * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
     * @param callback A callback that will handle the payload that is sent whenever your database changes.
     */
    on(
      event: SupabaseEventTypes,
      callback: (payload: SupabaseRealtimePayload<T>) => void
    ): ISupabaseRealtimeClient

    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns  The columns to retrieve, separated by commas.
     * @param head  When set to true, select will void data.
     * @param count  Count algorithm to use to count rows in a table.
     */
    select(columns?: string, { head, count, }?: {
      head?: boolean;
      count?: null | 'exact' | 'planned' | 'estimated';
    }): IPostgrestFilterBuilder<T>

    /**
     * Performs an INSERT into the table.
     *
     * @param values  The values to insert.
     * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */
    insert(
      values: Partial<T> | Partial<T>[],
      options?: {
        returning?: 'minimal' | 'representation'
        count?: null | 'exact' | 'planned' | 'estimated'
      }
    ): IPostgrestFilterBuilder<T>
    /**
     * @deprecated Use `upsert()` instead.
     */
    insert(
      values: Partial<T> | Partial<T>[],
      options?: {
        upsert?: boolean
        onConflict?: string
        returning?: 'minimal' | 'representation'
        count?: null | 'exact' | 'planned' | 'estimated'
      }
    ): IPostgrestFilterBuilder<T>
    insert(
      values: Partial<T> | Partial<T>[],
      {
          upsert,
          onConflict,
          returning,
          count,
      }?: {
        upsert?: boolean
        onConflict?: string
        returning?: 'minimal' | 'representation'
        count?: null | 'exact' | 'planned' | 'estimated'
      }
    ): IPostgrestFilterBuilder<T>

    /**
     * Performs an UPSERT into the table.
     *
     * @param values  The values to insert.
     * @param onConflict  By specifying the `on_conflict` query parameter, you can make UPSERT work on a column(s) that has a UNIQUE constraint.
     * @param returning  By default the new record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     * @param ignoreDuplicates  Specifies if duplicate rows should be ignored and not inserted.
     */
    upsert(
      values: Partial<T> | Partial<T>[],
      {
          onConflict,
          returning,
          count,
          ignoreDuplicates,
      }?: {
        onConflict?: string
        returning?: 'minimal' | 'representation'
        count?: null | 'exact' | 'planned' | 'estimated'
        ignoreDuplicates?: boolean
      }
    ): IPostgrestFilterBuilder<T>

    /**
     * Performs an UPDATE on the table.
     *
     * @param values  The values to update.
     * @param returning  By default the updated record is returned. Set this to 'minimal' if you don't need this value.
     * @param count  Count algorithm to use to count rows in a table.
     */
    update(
      values: Partial<T>,
      {
          returning,
          count,
      }?: {
        returning?: 'minimal' | 'representation'
        count?: null | 'exact' | 'planned' | 'estimated'
      }
    ): IPostgrestFilterBuilder<T>

    /**
     * Performs a DELETE on the table.
     *
     * @param returning  If `true`, return the deleted row(s) in the response.
     * @param count  Count algorithm to use to count rows in a table.
     */
    delete({
        returning,
        count,
    }?: {
      returning?: 'minimal' | 'representation'
      count?: null | 'exact' | 'planned' | 'estimated'
    }): IPostgrestFilterBuilder<T>
}
