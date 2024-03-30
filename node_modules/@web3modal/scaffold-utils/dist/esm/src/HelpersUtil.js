import { ConstantsUtil } from './ConstantsUtil.js';
export const HelpersUtil = {
    caipNetworkIdToNumber(caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    getCaipTokens(tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach(([id, token]) => {
            caipTokens[`${ConstantsUtil.EIP155}:${id}`] = token;
        });
        return caipTokens;
    }
};
//# sourceMappingURL=HelpersUtil.js.map