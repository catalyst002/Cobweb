export interface SIWESession {
    address: string;
    chainId: number;
}
export interface SIWECreateMessageArgs {
    nonce: string;
    address: string;
    chainId: number;
}
export interface SIWEVerifyMessageArgs {
    message: string;
    signature: string;
}
export interface SIWEClientMethods {
    getNonce: () => Promise<string>;
    createMessage: (args: SIWECreateMessageArgs) => string;
    verifyMessage: (args: SIWEVerifyMessageArgs) => Promise<boolean>;
    getSession: () => Promise<SIWESession | null>;
    signOut: () => Promise<boolean>;
    onSignIn?: (session?: SIWESession) => void;
    onSignOut?: () => void;
}
export interface SIWEConfig extends SIWEClientMethods {
    enabled?: boolean;
    nonceRefetchIntervalMs?: number;
    sessionRefetchIntervalMs?: number;
    signOutOnDisconnect?: boolean;
    signOutOnAccountChange?: boolean;
    signOutOnNetworkChange?: boolean;
}
