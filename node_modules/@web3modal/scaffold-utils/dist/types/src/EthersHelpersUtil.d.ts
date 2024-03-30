import type { CaipNetwork } from '@web3modal/core';
import type { Chain, Provider } from './EthersTypesUtil.js';
export declare const EthersHelpersUtil: {
    getCaipDefaultChain(chain?: Chain): CaipNetwork | undefined;
    hexStringToNumber(value: string): number;
    numberToHexString(value: number): string;
    getUserInfo(provider: Provider): Promise<{
        chainId: number;
        address: string | undefined;
    }>;
    getChainId(provider: Provider): Promise<number>;
    getAddress(provider: Provider): Promise<string | undefined>;
    addEthereumChain(provider: Provider, chain: Chain): Promise<void>;
};
