import { ConstantsUtil } from './ConstantsUtil.js';
export const PresetsUtil = {
    ConnectorExplorerIds: {
        [ConstantsUtil.COINBASE_CONNECTOR_ID]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [ConstantsUtil.SAFE_CONNECTOR_ID]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [ConstantsUtil.LEDGER_CONNECTOR_ID]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927'
    },
    EIP155NetworkImageIds: {
        1: '692ed6ba-e569-459a-556a-776476829e00',
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00'
    },
    ConnectorImageIds: {
        [ConstantsUtil.COINBASE_CONNECTOR_ID]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [ConstantsUtil.SAFE_CONNECTOR_ID]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [ConstantsUtil.LEDGER_CONNECTOR_ID]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [ConstantsUtil.INJECTED_CONNECTOR_ID]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [ConstantsUtil.INJECTED_CONNECTOR_ID]: 'Browser Wallet',
        [ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]: 'WalletConnect',
        [ConstantsUtil.COINBASE_CONNECTOR_ID]: 'Coinbase',
        [ConstantsUtil.COINBASE_SDK_CONNECTOR_ID]: 'Coinbase',
        [ConstantsUtil.LEDGER_CONNECTOR_ID]: 'Ledger',
        [ConstantsUtil.SAFE_CONNECTOR_ID]: 'Safe'
    },
    ConnectorTypesMap: {
        [ConstantsUtil.INJECTED_CONNECTOR_ID]: 'INJECTED',
        [ConstantsUtil.WALLET_CONNECT_CONNECTOR_ID]: 'WALLET_CONNECT',
        [ConstantsUtil.EIP6963_CONNECTOR_ID]: 'ANNOUNCED',
        [ConstantsUtil.EMAIL_CONNECTOR_ID]: 'EMAIL'
    },
    WalletConnectRpcChainIds: [
        1,
        5,
        11155111,
        10,
        420,
        42161,
        421613,
        137,
        80001,
        42220,
        1313161554,
        1313161555,
        56,
        97,
        43114,
        43113,
        100,
        8453,
        84531,
        7777777,
        999,
        324,
        280
    ]
};
//# sourceMappingURL=PresetsUtil.js.map