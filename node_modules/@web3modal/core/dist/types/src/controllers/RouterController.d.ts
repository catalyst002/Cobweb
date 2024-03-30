import type { CaipNetwork, Connector, WcWallet } from '../utils/TypeUtil.js';
export interface RouterControllerState {
    view: 'Account' | 'AccountSettings' | 'AllWallets' | 'ApproveTransaction' | 'BuyInProgress' | 'WalletCompatibleNetworks' | 'Connect' | 'ConnectingExternal' | 'ConnectingWalletConnect' | 'ConnectingSiwe' | 'Downloads' | 'EmailVerifyOtp' | 'EmailVerifyDevice' | 'GetWallet' | 'Networks' | 'OnRampActivity' | 'OnRampFiatSelect' | 'OnRampProviders' | 'OnRampTokenSelect' | 'WalletReceive' | 'SwitchNetwork' | 'Transactions' | 'UnsupportedChain' | 'UpdateEmailWallet' | 'UpdateEmailPrimaryOtp' | 'UpdateEmailSecondaryOtp' | 'UpgradeEmailWallet' | 'UpgradeToSmartAccount' | 'WhatIsANetwork' | 'WhatIsAWallet' | 'WhatIsABuy';
    history: RouterControllerState['view'][];
    data?: {
        connector?: Connector;
        wallet?: WcWallet;
        network?: CaipNetwork;
        email?: string;
        newEmail?: string;
    };
}
export declare const RouterController: {
    state: RouterControllerState;
    subscribeKey<K extends keyof RouterControllerState>(key: K, callback: (value: RouterControllerState[K]) => void): () => void;
    push(view: RouterControllerState['view'], data?: RouterControllerState['data']): void;
    reset(view: RouterControllerState['view']): void;
    replace(view: RouterControllerState['view'], data?: RouterControllerState['data']): void;
    goBack(): void;
    goBackToIndex(historyIndex: number): void;
};
