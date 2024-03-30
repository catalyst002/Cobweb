import type { CaipNetwork, CaipNetworkId } from '../utils/TypeUtil.js';
export interface NetworkControllerClient {
    switchCaipNetwork: (network: NetworkControllerState['caipNetwork']) => Promise<void>;
    getApprovedCaipNetworksData: () => Promise<{
        approvedCaipNetworkIds: NetworkControllerState['approvedCaipNetworkIds'];
        supportsAllNetworks: NetworkControllerState['supportsAllNetworks'];
    }>;
}
export interface NetworkControllerState {
    supportsAllNetworks: boolean;
    isDefaultCaipNetwork: boolean;
    isUnsupportedChain?: boolean;
    _client?: NetworkControllerClient;
    caipNetwork?: CaipNetwork;
    requestedCaipNetworks?: CaipNetwork[];
    approvedCaipNetworkIds?: CaipNetworkId[];
    allowUnsupportedChain?: boolean;
}
export declare const NetworkController: {
    state: NetworkControllerState;
    subscribeKey<K extends keyof NetworkControllerState>(key: K, callback: (value: NetworkControllerState[K]) => void): () => void;
    _getClient(): NetworkControllerClient;
    setClient(client: NetworkControllerClient): void;
    setCaipNetwork(caipNetwork: NetworkControllerState['caipNetwork']): void;
    setDefaultCaipNetwork(caipNetwork: NetworkControllerState['caipNetwork']): void;
    setRequestedCaipNetworks(requestedNetworks: NetworkControllerState['requestedCaipNetworks']): void;
    setAllowUnsupportedChain(allowUnsupportedChain: NetworkControllerState['allowUnsupportedChain']): void;
    getRequestedCaipNetworks(): CaipNetwork[];
    getApprovedCaipNetworksData(): Promise<void>;
    switchActiveNetwork(network: NetworkControllerState['caipNetwork']): Promise<void>;
    checkIfSupportedNetwork(): void;
    resetNetwork(): void;
    showUnsupportedChainUI(): void;
};
