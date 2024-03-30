import type { CustomWallet, Metadata, ProjectId, SdkVersion, Tokens } from '../utils/TypeUtil.js';
export interface OptionsControllerState {
    projectId: ProjectId;
    sdkType: 'w3m';
    sdkVersion: SdkVersion;
    allWallets?: 'SHOW' | 'HIDE' | 'ONLY_MOBILE';
    featuredWalletIds?: string[];
    includeWalletIds?: string[];
    excludeWalletIds?: string[];
    tokens?: Tokens;
    customWallets?: CustomWallet[];
    termsConditionsUrl?: string;
    privacyPolicyUrl?: string;
    isSiweEnabled?: boolean;
    enableAnalytics?: boolean;
    metadata?: Metadata;
    enableOnramp?: boolean;
    enableWalletFeatures?: boolean;
}
export declare const OptionsController: {
    state: OptionsControllerState;
    subscribeKey<K extends keyof OptionsControllerState>(key: K, callback: (value: OptionsControllerState[K]) => void): () => void;
    setProjectId(projectId: OptionsControllerState['projectId']): void;
    setAllWallets(allWallets: OptionsControllerState['allWallets']): void;
    setIncludeWalletIds(includeWalletIds: OptionsControllerState['includeWalletIds']): void;
    setExcludeWalletIds(excludeWalletIds: OptionsControllerState['excludeWalletIds']): void;
    setFeaturedWalletIds(featuredWalletIds: OptionsControllerState['featuredWalletIds']): void;
    setTokens(tokens: OptionsControllerState['tokens']): void;
    setTermsConditionsUrl(termsConditionsUrl: OptionsControllerState['termsConditionsUrl']): void;
    setPrivacyPolicyUrl(privacyPolicyUrl: OptionsControllerState['privacyPolicyUrl']): void;
    setCustomWallets(customWallets: OptionsControllerState['customWallets']): void;
    setIsSiweEnabled(isSiweEnabled: OptionsControllerState['isSiweEnabled']): void;
    setEnableAnalytics(enableAnalytics: OptionsControllerState['enableAnalytics']): void;
    setSdkVersion(sdkVersion: OptionsControllerState['sdkVersion']): void;
    setMetadata(metadata: OptionsControllerState['metadata']): void;
    setOnrampEnabled(enableOnramp: OptionsControllerState['enableOnramp']): void;
    setWalletFeaturesEnabled(enableWalletFeatures: OptionsControllerState['enableWalletFeatures']): void;
};
