const SECURE_SITE = 'https://secure.walletconnect.com';
export const ONRAMP_PROVIDERS = [
    {
        label: 'Coinbase',
        name: 'coinbase',
        feeRange: '1-2%',
        url: ''
    }
];
export const ConstantsUtil = {
    FOUR_MINUTES_MS: 240000,
    TEN_SEC_MS: 10000,
    ONE_SEC_MS: 1000,
    SECURE_SITE,
    SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
    SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
    RESTRICTED_TIMEZONES: [
        'ASIA/SHANGHAI',
        'ASIA/URUMQI',
        'ASIA/CHONGQING',
        'ASIA/HARBIN',
        'ASIA/KASHGAR',
        'ASIA/MACAU',
        'ASIA/HONG_KONG',
        'ASIA/MACAO',
        'ASIA/BEIJING',
        'ASIA/HARBIN'
    ],
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet'
    },
    WC_COINBASE_PAY_SDK_CHAINS: [
        'ethereum',
        'arbitrum',
        'polygon',
        'avalanche-c-chain',
        'optimism',
        'celo',
        'base'
    ],
    WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: 'ethereum',
    WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
        Ethereum: 'ethereum',
        'Arbitrum One': 'arbitrum',
        Polygon: 'polygon',
        Avalanche: 'avalanche-c-chain',
        'OP Mainnet': 'optimism',
        Celo: 'celo',
        Base: 'base'
    },
    WC_COINBASE_ONRAMP_APP_ID: 'bf18c88d-495a-463b-b249-0b9d3656cf5e'
};
//# sourceMappingURL=ConstantsUtil.js.map