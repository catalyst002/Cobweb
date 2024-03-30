import { subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref, subscribe as sub } from 'valtio/vanilla';
const state = proxy({
    provider: undefined,
    providerType: undefined,
    address: undefined,
    chainId: undefined,
    isConnected: false
});
export const EthersStoreUtil = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    subscribe(callback) {
        return sub(state, () => callback(state));
    },
    setProvider(provider) {
        if (provider) {
            state.provider = ref(provider);
        }
    },
    setProviderType(providerType) {
        state.providerType = providerType;
    },
    setAddress(address) {
        state.address = address;
    },
    setChainId(chainId) {
        state.chainId = chainId;
    },
    setIsConnected(isConnected) {
        state.isConnected = isConnected;
    },
    setError(error) {
        state.error = error;
    },
    reset() {
        state.provider = undefined;
        state.address = undefined;
        state.chainId = undefined;
        state.providerType = undefined;
        state.isConnected = false;
        state.error = undefined;
    }
};
//# sourceMappingURL=EthersStoreUtil.js.map