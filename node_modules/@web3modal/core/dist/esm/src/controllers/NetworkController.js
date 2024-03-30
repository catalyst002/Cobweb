import { subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref } from 'valtio/vanilla';
import { PublicStateController } from './PublicStateController.js';
import { EventsController } from './EventsController.js';
import { ModalController } from './ModalController.js';
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
const state = proxy({
    supportsAllNetworks: true,
    isDefaultCaipNetwork: false
});
export const NetworkController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    _getClient() {
        if (!state._client) {
            throw new Error('NetworkController client not set');
        }
        return state._client;
    },
    setClient(client) {
        state._client = ref(client);
    },
    setCaipNetwork(caipNetwork) {
        state.caipNetwork = caipNetwork;
        PublicStateController.set({ selectedNetworkId: caipNetwork?.id });
        if (!this.state.allowUnsupportedChain) {
            this.checkIfSupportedNetwork();
        }
    },
    setDefaultCaipNetwork(caipNetwork) {
        state.caipNetwork = caipNetwork;
        PublicStateController.set({ selectedNetworkId: caipNetwork?.id });
        state.isDefaultCaipNetwork = true;
    },
    setRequestedCaipNetworks(requestedNetworks) {
        state.requestedCaipNetworks = requestedNetworks;
    },
    setAllowUnsupportedChain(allowUnsupportedChain) {
        state.allowUnsupportedChain = allowUnsupportedChain;
    },
    getRequestedCaipNetworks() {
        const { approvedCaipNetworkIds, requestedCaipNetworks } = state;
        const approvedIds = approvedCaipNetworkIds;
        const requestedNetworks = requestedCaipNetworks;
        return CoreHelperUtil.sortRequestedNetworks(approvedIds, requestedNetworks);
    },
    async getApprovedCaipNetworksData() {
        const data = await this._getClient().getApprovedCaipNetworksData();
        state.supportsAllNetworks = data.supportsAllNetworks;
        state.approvedCaipNetworkIds = data.approvedCaipNetworkIds;
    },
    async switchActiveNetwork(network) {
        await this._getClient().switchCaipNetwork(network);
        state.caipNetwork = network;
        if (network) {
            EventsController.sendEvent({
                type: 'track',
                event: 'SWITCH_NETWORK',
                properties: { network: network.id }
            });
        }
    },
    checkIfSupportedNetwork() {
        state.isUnsupportedChain = !state.requestedCaipNetworks?.some(network => network.id === state.caipNetwork?.id);
        if (state.isUnsupportedChain) {
            this.showUnsupportedChainUI();
        }
    },
    resetNetwork() {
        if (!state.isDefaultCaipNetwork) {
            state.caipNetwork = undefined;
        }
        state.approvedCaipNetworkIds = undefined;
        state.supportsAllNetworks = true;
    },
    showUnsupportedChainUI() {
        setTimeout(() => {
            ModalController.open({ view: 'UnsupportedChain' });
        }, 300);
    }
};
//# sourceMappingURL=NetworkController.js.map