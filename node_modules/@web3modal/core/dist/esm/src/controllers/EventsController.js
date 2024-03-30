import { proxy, subscribe as sub } from 'valtio/vanilla';
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
import { FetchUtil } from '../utils/FetchUtil.js';
import { OptionsController } from './OptionsController.js';
const baseUrl = CoreHelperUtil.getAnalyticsUrl();
const api = new FetchUtil({ baseUrl });
const excluded = ['MODAL_CREATED'];
const state = proxy({
    timestamp: Date.now(),
    data: {
        type: 'track',
        event: 'MODAL_CREATED'
    }
});
export const EventsController = {
    state,
    subscribe(callback) {
        return sub(state, () => callback(state));
    },
    _getApiHeaders() {
        const { projectId, sdkType, sdkVersion } = OptionsController.state;
        return {
            'x-project-id': projectId,
            'x-sdk-type': sdkType,
            'x-sdk-version': sdkVersion
        };
    },
    async _sendAnalyticsEvent(payload) {
        try {
            if (excluded.includes(payload.data.event) || typeof window === 'undefined') {
                return;
            }
            await api.post({
                path: '/e',
                headers: EventsController._getApiHeaders(),
                body: {
                    eventId: CoreHelperUtil.getUUID(),
                    url: window.location.href,
                    domain: window.location.hostname,
                    timestamp: payload.timestamp,
                    props: payload.data
                }
            });
        }
        catch {
        }
    },
    sendEvent(data) {
        state.timestamp = Date.now();
        state.data = data;
        if (OptionsController.state.enableAnalytics) {
            EventsController._sendAnalyticsEvent(state);
        }
    }
};
//# sourceMappingURL=EventsController.js.map