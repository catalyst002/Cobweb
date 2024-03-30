import type { Event } from '../utils/TypeUtil.js';
export interface EventsControllerState {
    timestamp: number;
    data: Event;
}
export declare const EventsController: {
    state: EventsControllerState;
    subscribe(callback: (newState: EventsControllerState) => void): () => void;
    _getApiHeaders(): {
        'x-project-id': string;
        'x-sdk-type': "w3m";
        'x-sdk-version': import("../utils/TypeUtil.js").SdkVersion;
    };
    _sendAnalyticsEvent(payload: EventsControllerState): Promise<void>;
    sendEvent(data: EventsControllerState['data']): void;
};
