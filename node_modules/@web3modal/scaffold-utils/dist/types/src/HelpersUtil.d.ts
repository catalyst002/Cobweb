import type { CaipNetworkId, Tokens } from '@web3modal/core';
export declare const HelpersUtil: {
    caipNetworkIdToNumber(caipnetworkId?: CaipNetworkId): number | undefined;
    getCaipTokens(tokens?: Tokens): Tokens | undefined;
};
