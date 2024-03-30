import { subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref } from 'valtio/vanilla';
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
import { StorageUtil } from '../utils/StorageUtil.js';
import { TransactionsController } from './TransactionsController.js';
const state = proxy({
    wcError: false,
    buffering: false
});
export const ConnectionController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    _getClient() {
        if (!state._client) {
            throw new Error('ConnectionController client not set');
        }
        return state._client;
    },
    setClient(client) {
        state._client = ref(client);
    },
    connectWalletConnect() {
        state.wcPromise = this._getClient().connectWalletConnect(uri => {
            state.wcUri = uri;
            state.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
        });
        StorageUtil.setConnectedConnector('WALLET_CONNECT');
    },
    async connectExternal(options) {
        await this._getClient().connectExternal?.(options);
        StorageUtil.setConnectedConnector(options.type);
    },
    async signMessage(message) {
        return this._getClient().signMessage(message);
    },
    checkInstalled(ids) {
        return this._getClient().checkInstalled?.(ids);
    },
    resetWcConnection() {
        state.wcUri = undefined;
        state.wcPairingExpiry = undefined;
        state.wcPromise = undefined;
        state.wcLinking = undefined;
        state.recentWallet = undefined;
        TransactionsController.resetTransactions();
        StorageUtil.deleteWalletConnectDeepLink();
    },
    setWcLinking(wcLinking) {
        state.wcLinking = wcLinking;
    },
    setWcError(wcError) {
        state.wcError = wcError;
        state.buffering = false;
    },
    setRecentWallet(wallet) {
        state.recentWallet = wallet;
    },
    setBuffering(buffering) {
        state.buffering = buffering;
    },
    async disconnect() {
        await this._getClient().disconnect();
        this.resetWcConnection();
    }
};
//# sourceMappingURL=ConnectionController.js.map