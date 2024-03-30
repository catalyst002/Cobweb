import { subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref, snapshot } from 'valtio/vanilla';
import { OptionsController } from './OptionsController.js';
import { ThemeController } from './ThemeController.js';
const state = proxy({
    connectors: []
});
export const ConnectorController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    setConnectors(connectors) {
        state.connectors = connectors.map(c => ref(c));
    },
    addConnector(connector) {
        state.connectors.push(ref(connector));
        if (connector.id === 'w3mEmail') {
            const emailConnector = connector;
            const optionsState = snapshot(OptionsController.state);
            emailConnector?.provider?.syncDappData?.({
                metadata: optionsState.metadata,
                sdkVersion: optionsState.sdkVersion,
                projectId: optionsState.projectId
            });
            emailConnector.provider.syncTheme({
                themeMode: ThemeController.getSnapshot().themeMode,
                themeVariables: ThemeController.getSnapshot().themeVariables
            });
        }
    },
    getEmailConnector() {
        return state.connectors.find(c => c.type === 'EMAIL');
    },
    getAnnouncedConnectorRdns() {
        return state.connectors.filter(c => c.type === 'ANNOUNCED').map(c => c.info?.rdns);
    },
    getConnectors() {
        return state.connectors;
    }
};
//# sourceMappingURL=ConnectorController.js.map