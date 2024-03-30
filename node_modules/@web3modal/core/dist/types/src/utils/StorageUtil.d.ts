import type { WcWallet, ConnectorType } from './TypeUtil.js';
export declare const StorageUtil: {
    setWalletConnectDeepLink({ href, name }: {
        href: string;
        name: string;
    }): void;
    getWalletConnectDeepLink(): any;
    deleteWalletConnectDeepLink(): void;
    setWeb3ModalRecent(wallet: WcWallet): void;
    getRecentWallets(): WcWallet[];
    setConnectedWalletImageUrl(imageUrl: string): void;
    getConnectedWalletImageUrl(): string | null | undefined;
    setConnectedConnector(connectorType: ConnectorType): void;
    getConnectedConnector(): ConnectorType | undefined;
};
