import type { Connector, WcWallet } from '../utils/TypeUtil.js';
export interface ConnectExternalOptions {
    id: Connector['id'];
    type: Connector['type'];
    provider?: Connector['provider'];
    info?: Connector['info'];
}
export interface ConnectionControllerClient {
    connectWalletConnect: (onUri: (uri: string) => void) => Promise<void>;
    disconnect: () => Promise<void>;
    signMessage: (message: string) => Promise<string>;
    connectExternal?: (options: ConnectExternalOptions) => Promise<void>;
    checkInstalled?: (ids?: string[]) => boolean;
}
export interface ConnectionControllerState {
    _client?: ConnectionControllerClient;
    wcUri?: string;
    wcPromise?: Promise<void>;
    wcPairingExpiry?: number;
    wcLinking?: {
        href: string;
        name: string;
    };
    wcError?: boolean;
    recentWallet?: WcWallet;
    buffering: boolean;
}
export declare const ConnectionController: {
    state: ConnectionControllerState;
    subscribeKey<K extends keyof ConnectionControllerState>(key: K, callback: (value: ConnectionControllerState[K]) => void): () => void;
    _getClient(): ConnectionControllerClient;
    setClient(client: ConnectionControllerClient): void;
    connectWalletConnect(): void;
    connectExternal(options: ConnectExternalOptions): Promise<void>;
    signMessage(message: string): Promise<string>;
    checkInstalled(ids?: string[]): boolean | undefined;
    resetWcConnection(): void;
    setWcLinking(wcLinking: ConnectionControllerState['wcLinking']): void;
    setWcError(wcError: ConnectionControllerState['wcError']): void;
    setRecentWallet(wallet: ConnectionControllerState['recentWallet']): void;
    setBuffering(buffering: ConnectionControllerState['buffering']): void;
    disconnect(): Promise<void>;
};
