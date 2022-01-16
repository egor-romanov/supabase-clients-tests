export interface IPush {
    resend(timeout: number): void

    send(): void

    updatePayload(payload: { [key: string]: unknown }): void

    // eslint-disable-next-line @typescript-eslint/ban-types
    receive(status: string, callback: Function): IPush

    startTimeout(): void

    trigger(status: string, response: any): void

    destroy(): void
}
