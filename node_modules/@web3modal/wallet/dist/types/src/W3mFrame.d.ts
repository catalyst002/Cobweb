import type { W3mFrameTypes } from './W3mFrameTypes.js';
export declare class W3mFrame {
    private iframe;
    private projectId;
    private rpcUrl;
    frameLoadPromise: Promise<void>;
    frameLoadPromiseResolver: {
        resolve: (value: undefined) => void;
        reject: (reason?: unknown) => void;
    } | undefined;
    constructor(projectId: string, isAppClient?: boolean);
    get networks(): Record<number, W3mFrameTypes.Network>;
    events: {
        onFrameEvent: (callback: (event: W3mFrameTypes.FrameEvent) => void) => void;
        onAppEvent: (callback: (event: W3mFrameTypes.AppEvent) => void) => void;
        postAppEvent: (event: W3mFrameTypes.AppEvent) => void;
        postFrameEvent: (event: W3mFrameTypes.FrameEvent) => void;
    };
}
