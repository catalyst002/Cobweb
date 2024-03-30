import type { W3mAccountButton, W3mButton, W3mConnectButton, W3mNetworkButton, W3mOnrampWidget, Web3ModalScaffold } from '@web3modal/scaffold';
type OpenOptions = Parameters<Web3ModalScaffold['open']>[0];
type ThemeModeOptions = Parameters<Web3ModalScaffold['setThemeMode']>[0];
type ThemeVariablesOptions = Parameters<Web3ModalScaffold['setThemeVariables']>[0];
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        W3mConnectButton: Pick<W3mConnectButton, 'size' | 'label' | 'loadingLabel'>;
        W3mAccountButton: Pick<W3mAccountButton, 'disabled' | 'balance'>;
        W3mButton: Pick<W3mButton, 'size' | 'label' | 'loadingLabel' | 'disabled' | 'balance'>;
        W3mNetworkButton: Pick<W3mNetworkButton, 'disabled'>;
        W3mOnrampWidget: Pick<W3mOnrampWidget, 'disabled'>;
    }
}
export declare function getWeb3Modal(web3modal: any): void;
export declare function useWeb3ModalTheme(): {
    setThemeMode: (themeMode: ThemeModeOptions) => void;
    setThemeVariables: (themeVariables: ThemeVariablesOptions) => void;
    themeMode: import("vue").Ref<import("@web3modal/scaffold").ThemeMode>;
    themeVariables: import("vue").Ref<{
        '--w3m-font-family'?: string | undefined;
        '--w3m-accent'?: string | undefined;
        '--w3m-color-mix'?: string | undefined;
        '--w3m-color-mix-strength'?: number | undefined;
        '--w3m-font-size-master'?: string | undefined;
        '--w3m-border-radius-master'?: string | undefined;
        '--w3m-z-index'?: number | undefined;
    }>;
};
export declare function useWeb3Modal(): {
    open: (options?: OpenOptions) => Promise<void>;
    close: () => Promise<void>;
};
export declare function useWeb3ModalState(): {
    open: boolean;
    selectedNetworkId: `${string}:${string}` | undefined;
};
export declare function useWeb3ModalEvents(): {
    timestamp: number;
    data: {
        type: "track";
        event: "MODAL_CREATED";
    } | {
        type: "track";
        event: "MODAL_LOADED";
    } | {
        type: "track";
        event: "MODAL_OPEN";
        properties: {
            connected: boolean;
        };
    } | {
        type: "track";
        event: "MODAL_CLOSE";
        properties: {
            connected: boolean;
        };
    } | {
        type: "track";
        event: "CLICK_ALL_WALLETS";
    } | {
        type: "track";
        event: "SELECT_WALLET";
        properties: {
            name: string;
            platform: import("@web3modal/scaffold").Platform;
        };
    } | {
        type: "track";
        event: "CONNECT_SUCCESS";
        properties: {
            method: "mobile" | "browser" | "qrcode" | "email";
            name: string;
        };
    } | {
        type: "track";
        event: "CONNECT_ERROR";
        properties: {
            message: string;
        };
    } | {
        type: "track";
        event: "DISCONNECT_SUCCESS";
    } | {
        type: "track";
        event: "DISCONNECT_ERROR";
    } | {
        type: "track";
        event: "CLICK_WALLET_HELP";
    } | {
        type: "track";
        event: "CLICK_NETWORK_HELP";
    } | {
        type: "track";
        event: "CLICK_GET_WALLET";
    } | {
        type: "track";
        event: "CLICK_TRANSACTIONS";
    } | {
        type: "track";
        event: "ERROR_FETCH_TRANSACTIONS";
        properties: {
            address: string;
            projectId: string;
            cursor: string | undefined;
        };
    } | {
        type: "track";
        event: "LOAD_MORE_TRANSACTIONS";
        properties: {
            address: string | undefined;
            projectId: string;
            cursor: string | undefined;
        };
    } | {
        type: "track";
        event: "CLICK_SIGN_SIWE_MESSAGE";
    } | {
        type: "track";
        event: "CLICK_CANCEL_SIWE";
    } | {
        type: "track";
        event: "CLICK_NETWORKS";
    } | {
        type: "track";
        event: "SIWE_AUTH_SUCCESS";
    } | {
        type: "track";
        event: "SIWE_AUTH_ERROR";
    } | {
        type: "track";
        event: "EMAIL_LOGIN_SELECTED";
    } | {
        type: "track";
        event: "EMAIL_SUBMITTED";
    } | {
        type: "track";
        event: "DEVICE_REGISTERED_FOR_EMAIL";
    } | {
        type: "track";
        event: "EMAIL_VERIFICATION_CODE_SENT";
    } | {
        type: "track";
        event: "EMAIL_VERIFICATION_CODE_PASS";
    } | {
        type: "track";
        event: "EMAIL_VERIFICATION_CODE_FAIL";
    } | {
        type: "track";
        event: "EMAIL_EDIT";
    } | {
        type: "track";
        event: "EMAIL_UPGRADE_FROM_MODAL";
    } | {
        type: "track";
        event: "SWITCH_NETWORK";
        properties: {
            network: string;
        };
    };
};
export {};
