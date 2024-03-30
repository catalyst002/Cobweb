import { W3mFrame } from './W3mFrame.js';
import { W3mFrameConstants, W3mFrameRpcConstants } from './W3mFrameConstants.js';
import { W3mFrameStorage } from './W3mFrameStorage.js';
import { W3mFrameHelpers } from './W3mFrameHelpers.js';
export class W3mFrameProvider {
    constructor(projectId) {
        this.connectEmailResolver = undefined;
        this.connectDeviceResolver = undefined;
        this.connectOtpResolver = undefined;
        this.connectResolver = undefined;
        this.disconnectResolver = undefined;
        this.isConnectedResolver = undefined;
        this.getChainIdResolver = undefined;
        this.switchChainResolver = undefined;
        this.rpcRequestResolver = undefined;
        this.updateEmailResolver = undefined;
        this.updateEmailPrimaryOtpResolver = undefined;
        this.updateEmailSecondaryOtpResolver = undefined;
        this.syncThemeResolver = undefined;
        this.syncDappDataResolver = undefined;
        this.smartAccountEnabledNetworksResolver = undefined;
        this.initSmartAccountResolver = undefined;
        this.setPreferredAccountResolver = undefined;
        this.w3mFrame = new W3mFrame(projectId, true);
        this.w3mFrame.events.onFrameEvent(event => {
            console.log('💻 received', event);
            switch (event.type) {
                case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:
                    return this.onConnectEmailSuccess(event);
                case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:
                    return this.onConnectEmailError(event);
                case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:
                    return this.onConnectDeviceSuccess();
                case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:
                    return this.onConnectDeviceError(event);
                case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:
                    return this.onConnectOtpSuccess();
                case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:
                    return this.onConnectOtpError(event);
                case W3mFrameConstants.FRAME_GET_USER_SUCCESS:
                    return this.onConnectSuccess(event);
                case W3mFrameConstants.FRAME_GET_USER_ERROR:
                    return this.onConnectError(event);
                case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:
                    return this.onIsConnectedSuccess(event);
                case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:
                    return this.onIsConnectedError(event);
                case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:
                    return this.onGetChainIdSuccess(event);
                case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:
                    return this.onGetChainIdError(event);
                case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:
                    return this.onSignOutSuccess();
                case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:
                    return this.onSignOutError(event);
                case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:
                    return this.onSwitchChainSuccess(event);
                case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:
                    return this.onSwitchChainError(event);
                case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:
                    return this.onRpcRequestSuccess(event);
                case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:
                    return this.onRpcRequestError(event);
                case W3mFrameConstants.FRAME_SESSION_UPDATE:
                    return this.onSessionUpdate(event);
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:
                    return this.onUpdateEmailSuccess();
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:
                    return this.onUpdateEmailError(event);
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
                    return this.onUpdateEmailPrimaryOtpSuccess();
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
                    return this.onUpdateEmailPrimaryOtpError(event);
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
                    return this.onUpdateEmailSecondaryOtpSuccess(event);
                case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
                    return this.onUpdateEmailSecondaryOtpError(event);
                case W3mFrameConstants.FRAME_SYNC_THEME_SUCCESS:
                    return this.onSyncThemeSuccess();
                case W3mFrameConstants.FRAME_SYNC_THEME_ERROR:
                    return this.onSyncThemeError(event);
                case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_SUCCESS:
                    return this.onSyncDappDataSuccess();
                case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_ERROR:
                    return this.onSyncDappDataError(event);
                case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
                    return this.onSmartAccountEnabledNetworksSuccess(event);
                case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
                    return this.onSmartAccountEnabledNetworksError(event);
                case W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_SUCCESS:
                    return this.onInitSmartAccountSuccess(event);
                case W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_ERROR:
                    return this.onInitSmartAccountError(event);
                case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
                    return this.onPreferSmartAccountSuccess(event);
                case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR:
                    return this.onPreferSmartAccountError();
                default:
                    return null;
            }
        });
    }
    getLoginEmailUsed() {
        return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY));
    }
    getEmail() {
        return W3mFrameStorage.get(W3mFrameConstants.EMAIL);
    }
    rejectRpcRequest() {
        this.rpcRequestResolver?.reject();
    }
    async connectEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        W3mFrameHelpers.checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_EMAIL, payload });
        return new Promise((resolve, reject) => {
            this.connectEmailResolver = { resolve, reject };
        });
    }
    async connectDevice() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_DEVICE });
        return new Promise((resolve, reject) => {
            this.connectDeviceResolver = { resolve, reject };
        });
    }
    async connectOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_OTP, payload });
        return new Promise((resolve, reject) => {
            this.connectOtpResolver = { resolve, reject };
        });
    }
    async isConnected() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_IS_CONNECTED,
            payload: undefined
        });
        return new Promise((resolve, reject) => {
            this.isConnectedResolver = { resolve, reject };
        });
    }
    async getChainId() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_CHAIN_ID });
        return new Promise((resolve, reject) => {
            this.getChainIdResolver = { resolve, reject };
        });
    }
    async updateEmail(payload) {
        await this.w3mFrame.frameLoadPromise;
        W3mFrameHelpers.checkIfAllowedToTriggerEmail();
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_UPDATE_EMAIL, payload });
        return new Promise((resolve, reject) => {
            this.updateEmailResolver = { resolve, reject };
        });
    }
    async updateEmailPrimaryOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,
            payload
        });
        return new Promise((resolve, reject) => {
            this.updateEmailPrimaryOtpResolver = { resolve, reject };
        });
    }
    async updateEmailSecondaryOtp(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,
            payload
        });
        return new Promise((resolve, reject) => {
            this.updateEmailSecondaryOtpResolver = { resolve, reject };
        });
    }
    async syncTheme(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_THEME, payload });
        return new Promise((resolve, reject) => {
            this.syncThemeResolver = { resolve, reject };
        });
    }
    async syncDappData(payload) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_DAPP_DATA, payload });
        return new Promise((resolve, reject) => {
            this.syncDappDataResolver = { resolve, reject };
        });
    }
    async getSmartAccountEnabledNetworks() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
        });
        return new Promise((resolve, reject) => {
            this.smartAccountEnabledNetworksResolver = { resolve, reject };
        });
    }
    async initSmartAccount() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_INIT_SMART_ACCOUNT });
        return new Promise((resolve, reject) => {
            this.initSmartAccountResolver = { resolve, reject };
        });
    }
    async setPreferredAccount(type) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
            payload: { type }
        });
        return new Promise((resolve, reject) => {
            this.setPreferredAccountResolver = { resolve, reject };
        });
    }
    async connect(payload) {
        const chainId = payload?.chainId ?? this.getLastUsedChainId() ?? 1;
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_GET_USER,
            payload: { chainId }
        });
        return new Promise((resolve, reject) => {
            this.connectResolver = { resolve, reject };
        });
    }
    async switchNetwork(chainId) {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_SWITCH_NETWORK,
            payload: { chainId }
        });
        return new Promise((resolve, reject) => {
            this.switchChainResolver = { resolve, reject };
        });
    }
    async disconnect() {
        await this.w3mFrame.frameLoadPromise;
        this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SIGN_OUT });
        return new Promise((resolve, reject) => {
            this.disconnectResolver = { resolve, reject };
        });
    }
    async request(req) {
        await this.w3mFrame.frameLoadPromise;
        if (W3mFrameRpcConstants.GET_CHAIN_ID === req.method) {
            return this.getLastUsedChainId();
        }
        this.w3mFrame.events.postAppEvent({
            type: W3mFrameConstants.APP_RPC_REQUEST,
            payload: req
        });
        return new Promise((resolve, reject) => {
            this.rpcRequestResolver = { resolve, reject };
        });
    }
    onRpcRequest(callback) {
        this.w3mFrame.events.onAppEvent(event => {
            if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onRpcResponse(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
                callback(event);
            }
        });
    }
    onIsConnected(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type === W3mFrameConstants.FRAME_GET_USER_SUCCESS) {
                callback();
            }
        });
    }
    onNotConnected(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_ERROR) {
                callback();
            }
            if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS &&
                !event.payload.isConnected) {
                callback();
            }
        });
    }
    onInitSmartAccount(callback) {
        this.w3mFrame.events.onFrameEvent(event => {
            if (event.type === W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_SUCCESS) {
                callback(event.payload.isDeployed);
            }
            else if (event.type === W3mFrameConstants.FRAME_INIT_SMART_ACCOUNT_ERROR) {
                callback(false);
            }
        });
    }
    onConnectEmailSuccess(event) {
        this.connectEmailResolver?.resolve(event.payload);
        this.setNewLastEmailLoginTime();
    }
    onConnectEmailError(event) {
        this.connectEmailResolver?.reject(event.payload.message);
    }
    onConnectDeviceSuccess() {
        this.connectDeviceResolver?.resolve(undefined);
    }
    onConnectDeviceError(event) {
        this.connectDeviceResolver?.reject(event.payload.message);
    }
    onConnectOtpSuccess() {
        this.connectOtpResolver?.resolve(undefined);
    }
    onConnectOtpError(event) {
        this.connectOtpResolver?.reject(event.payload.message);
    }
    onConnectSuccess(event) {
        this.setEmailLoginSuccess(event.payload.email);
        this.setLastUsedChainId(event.payload.chainId);
        this.connectResolver?.resolve(event.payload);
    }
    onConnectError(event) {
        this.connectResolver?.reject(event.payload.message);
    }
    onIsConnectedSuccess(event) {
        if (!event.payload.isConnected) {
            this.deleteEmailLoginCache();
        }
        this.isConnectedResolver?.resolve(event.payload);
    }
    onIsConnectedError(event) {
        this.isConnectedResolver?.reject(event.payload.message);
    }
    onGetChainIdSuccess(event) {
        this.setLastUsedChainId(event.payload.chainId);
        this.getChainIdResolver?.resolve(event.payload);
    }
    onGetChainIdError(event) {
        this.getChainIdResolver?.reject(event.payload.message);
    }
    onSignOutSuccess() {
        this.disconnectResolver?.resolve(undefined);
        this.deleteEmailLoginCache();
    }
    onSignOutError(event) {
        this.disconnectResolver?.reject(event.payload.message);
    }
    onSwitchChainSuccess(event) {
        this.setLastUsedChainId(event.payload.chainId);
        this.switchChainResolver?.resolve(event.payload);
    }
    onSwitchChainError(event) {
        this.switchChainResolver?.reject(event.payload.message);
    }
    onRpcRequestSuccess(event) {
        this.rpcRequestResolver?.resolve(event.payload);
    }
    onRpcRequestError(event) {
        this.rpcRequestResolver?.reject(event.payload.message);
    }
    onSessionUpdate(event) {
        const { payload } = event;
        if (payload) {
        }
    }
    onUpdateEmailSuccess() {
        this.updateEmailResolver?.resolve(undefined);
        this.setNewLastEmailLoginTime();
    }
    onUpdateEmailError(event) {
        this.updateEmailResolver?.reject(event.payload.message);
    }
    onUpdateEmailPrimaryOtpSuccess() {
        this.updateEmailPrimaryOtpResolver?.resolve(undefined);
    }
    onUpdateEmailPrimaryOtpError(event) {
        this.updateEmailPrimaryOtpResolver?.reject(event.payload.message);
    }
    onUpdateEmailSecondaryOtpSuccess(event) {
        const { newEmail } = event.payload;
        this.setEmailLoginSuccess(newEmail);
        this.updateEmailSecondaryOtpResolver?.resolve({ newEmail });
    }
    onUpdateEmailSecondaryOtpError(event) {
        this.updateEmailSecondaryOtpResolver?.reject(event.payload.message);
    }
    onSyncThemeSuccess() {
        this.syncThemeResolver?.resolve(undefined);
    }
    onSyncThemeError(event) {
        this.syncThemeResolver?.reject(event.payload.message);
    }
    onSyncDappDataSuccess() {
        this.syncDappDataResolver?.resolve(undefined);
    }
    onSyncDappDataError(event) {
        this.syncDappDataResolver?.reject(event.payload.message);
    }
    onSmartAccountEnabledNetworksSuccess(event) {
        this.smartAccountEnabledNetworksResolver?.resolve(event.payload);
    }
    onSmartAccountEnabledNetworksError(event) {
        this.smartAccountEnabledNetworksResolver?.reject(event.payload.message);
    }
    onInitSmartAccountSuccess(event) {
        this.initSmartAccountResolver?.resolve(event.payload);
    }
    onInitSmartAccountError(event) {
        this.initSmartAccountResolver?.reject(event.payload.message);
    }
    onPreferSmartAccountSuccess(event) {
        this.persistPreferredAccount(event.payload.type);
        this.setPreferredAccountResolver?.resolve(undefined);
    }
    onPreferSmartAccountError() {
        this.setPreferredAccountResolver?.reject();
    }
    setNewLastEmailLoginTime() {
        W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
    }
    setEmailLoginSuccess(email) {
        W3mFrameStorage.set(W3mFrameConstants.EMAIL, email);
        W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY, 'true');
        W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    }
    deleteEmailLoginCache() {
        W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);
        W3mFrameStorage.delete(W3mFrameConstants.EMAIL);
        W3mFrameStorage.delete(W3mFrameConstants.LAST_USED_CHAIN_KEY);
    }
    setLastUsedChainId(chainId) {
        W3mFrameStorage.set(W3mFrameConstants.LAST_USED_CHAIN_KEY, String(chainId));
    }
    getLastUsedChainId() {
        return Number(W3mFrameStorage.get(W3mFrameConstants.LAST_USED_CHAIN_KEY));
    }
    persistPreferredAccount(type) {
        W3mFrameStorage.set(W3mFrameConstants.PREFERRED_ACCOUNT_TYPE, type);
    }
}
//# sourceMappingURL=W3mFrameProvider.js.map