import type { WcWallet } from '@web3modal/core';
export declare function markWalletsAsInstalled(wallets: WcWallet[]): (WcWallet & {
    installed: boolean;
})[];
