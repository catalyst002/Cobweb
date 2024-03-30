import type { W3mFrameTypes } from './W3mFrameTypes.js';
export declare class W3mFrameProvider {
    private w3mFrame;
    private connectEmailResolver;
    private connectDeviceResolver;
    private connectOtpResolver;
    private connectResolver;
    private disconnectResolver;
    private isConnectedResolver;
    private getChainIdResolver;
    private switchChainResolver;
    private rpcRequestResolver;
    private updateEmailResolver;
    private updateEmailPrimaryOtpResolver;
    private updateEmailSecondaryOtpResolver;
    private syncThemeResolver;
    private syncDappDataResolver;
    private smartAccountEnabledNetworksResolver;
    private initSmartAccountResolver;
    private setPreferredAccountResolver;
    constructor(projectId: string);
    getLoginEmailUsed(): boolean;
    getEmail(): string | null;
    rejectRpcRequest(): void;
    connectEmail(payload: W3mFrameTypes.Requests['AppConnectEmailRequest']): Promise<{
        action: "VERIFY_DEVICE" | "VERIFY_OTP";
    }>;
    connectDevice(): Promise<unknown>;
    connectOtp(payload: W3mFrameTypes.Requests['AppConnectOtpRequest']): Promise<unknown>;
    isConnected(): Promise<{
        isConnected: boolean;
    }>;
    getChainId(): Promise<{
        chainId: number;
    }>;
    updateEmail(payload: W3mFrameTypes.Requests['AppUpdateEmailRequest']): Promise<unknown>;
    updateEmailPrimaryOtp(payload: W3mFrameTypes.Requests['AppUpdateEmailPrimaryOtpRequest']): Promise<unknown>;
    updateEmailSecondaryOtp(payload: W3mFrameTypes.Requests['AppUpdateEmailSecondaryOtpRequest']): Promise<{
        newEmail: string;
    }>;
    syncTheme(payload: W3mFrameTypes.Requests['AppSyncThemeRequest']): Promise<unknown>;
    syncDappData(payload: W3mFrameTypes.Requests['AppSyncDappDataRequest']): Promise<unknown>;
    getSmartAccountEnabledNetworks(): Promise<{
        smartAccountEnabledNetworks: number[];
    }>;
    initSmartAccount(): Promise<{
        address: string;
        isDeployed: boolean;
    }>;
    setPreferredAccount(type: 'eoa' | 'smartAccount'): Promise<unknown>;
    connect(payload?: W3mFrameTypes.Requests['AppGetUserRequest']): Promise<{
        chainId: number;
        email: string;
        address: string;
    }>;
    switchNetwork(chainId: number): Promise<{
        chainId: number;
    }>;
    disconnect(): Promise<unknown>;
    request(req: W3mFrameTypes.RPCRequest): Promise<any>;
    onRpcRequest(callback: (request: unknown) => void): void;
    onRpcResponse(callback: (request: unknown) => void): void;
    onIsConnected(callback: () => void): void;
    onNotConnected(callback: () => void): void;
    onInitSmartAccount(callback: (isDeployed: boolean) => void): void;
    private onConnectEmailSuccess;
    private onConnectEmailError;
    private onConnectDeviceSuccess;
    private onConnectDeviceError;
    private onConnectOtpSuccess;
    private onConnectOtpError;
    private onConnectSuccess;
    private onConnectError;
    private onIsConnectedSuccess;
    private onIsConnectedError;
    private onGetChainIdSuccess;
    private onGetChainIdError;
    private onSignOutSuccess;
    private onSignOutError;
    private onSwitchChainSuccess;
    private onSwitchChainError;
    private onRpcRequestSuccess;
    private onRpcRequestError;
    private onSessionUpdate;
    private onUpdateEmailSuccess;
    private onUpdateEmailError;
    private onUpdateEmailPrimaryOtpSuccess;
    private onUpdateEmailPrimaryOtpError;
    private onUpdateEmailSecondaryOtpSuccess;
    private onUpdateEmailSecondaryOtpError;
    private onSyncThemeSuccess;
    private onSyncThemeError;
    private onSyncDappDataSuccess;
    private onSyncDappDataError;
    private onSmartAccountEnabledNetworksSuccess;
    private onSmartAccountEnabledNetworksError;
    private onInitSmartAccountSuccess;
    private onInitSmartAccountError;
    private onPreferSmartAccountSuccess;
    private onPreferSmartAccountError;
    private setNewLastEmailLoginTime;
    private setEmailLoginSuccess;
    private deleteEmailLoginCache;
    private setLastUsedChainId;
    private getLastUsedChainId;
    private persistPreferredAccount;
}
