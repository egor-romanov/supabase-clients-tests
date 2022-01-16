import { CHANNEL_EVENTS } from '@supabase/realtime-js/dist/main/lib/constants'

import { IPush } from './IPush'

export interface IRealtimeSubscription {
    rejoinUntilConnected(): void

    subscribe(timeout?: number): IPush

    // eslint-disable-next-line @typescript-eslint/ban-types
    onClose(callback: Function): void

    // eslint-disable-next-line @typescript-eslint/ban-types
    onError(callback: Function): void

    // eslint-disable-next-line @typescript-eslint/ban-types
    on(event: string, callback: Function): void

    off(event: string): void

    canPush(): boolean

    push(event: CHANNEL_EVENTS, payload: any, timeout?: number): IPush

    updateJoinPayload(payload: { [key: string]: unknown }): void

    /**
     * Leaves the channel
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
    unsubscribe(timeout): IPush

    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     */
    onMessage(event: string, payload: any, ref?: string): any

    isMember(topic: string): boolean

    joinRef(): string

    sendJoin(timeout: number): void

    rejoin(timeout): void

    trigger(event: string, payload?: any, ref?: string): void

    replyEventName(ref: string): string

    isClosed(): boolean
    isErrored(): boolean
    isJoined(): boolean
    isJoining(): boolean
    isLeaving(): boolean
}
