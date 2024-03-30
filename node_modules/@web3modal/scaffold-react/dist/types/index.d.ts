import type { W3mAccountButton, W3mButton, W3mConnectButton, W3mNetworkButton, W3mOnrampWidget, Web3ModalScaffold } from '@web3modal/scaffold';
type OpenOptions = Parameters<Web3ModalScaffold['open']>[0];
type ThemeModeOptions = Parameters<Web3ModalScaffold['setThemeMode']>[0];
type ThemeVariablesOptions = Parameters<Web3ModalScaffold['setThemeVariables']>[0];
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'w3m-connect-button': Pick<W3mConnectButton, 'size' | 'label' | 'loadingLabel'>;
            'w3m-account-button': Pick<W3mAccountButton, 'disabled' | 'balance'>;
            'w3m-button': Pick<W3mButton, 'size' | 'label' | 'loadingLabel' | 'disabled' | 'balance'>;
            'w3m-network-button': Pick<W3mNetworkButton, 'disabled'>;
            'w3m-onramp-widget': Pick<W3mOnrampWidget, 'disabled'>;
        }
    }
}
export declare function getWeb3Modal(web3modal: any): void;
export declare function useWeb3ModalTheme(): {
    themeMode: "dark" | "light";
    themeVariables: import("@web3modal/scaffold").ThemeVariables;
    setThemeMode: (themeMode: ThemeModeOptions) => void;
    setThemeVariables: (themeVariables: ThemeVariablesOptions) => void;
};
export declare function useWeb3Modal(): {
    open: (options?: OpenOptions) => Promise<void>;
    close: () => Promise<void>;
};
export declare function useWeb3ModalState(): {
    open: boolean;
    selectedNetworkId?: `${string}:${string}` | undefined;
};
export declare function useWeb3ModalEvents(): {
    timestamp: number;
    data: import("@web3modal/scaffold").Event;
};
export {};
