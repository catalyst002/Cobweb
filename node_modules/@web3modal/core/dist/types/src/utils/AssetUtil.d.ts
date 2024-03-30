import type { CaipNetwork, Connector, WcWallet } from './TypeUtil.js';
export declare const AssetUtil: {
    getWalletImage(wallet?: WcWallet): string | undefined;
    getNetworkImage(network?: CaipNetwork): string | undefined;
    getConnectorImage(connector?: Connector): string | undefined;
};
