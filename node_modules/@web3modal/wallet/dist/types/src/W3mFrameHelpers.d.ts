export declare const W3mFrameHelpers: {
    getBlockchainApiUrl(): false | "https://rpc.walletconnect.org" | "https://rpc.walletconnect.com";
    checkIfAllowedToTriggerEmail(): void;
    getTimeToNextEmailLogin(): number;
    checkIfRequestExists(request: unknown): boolean;
    getRequestMethod(request: unknown): "eth_accounts" | "eth_blockNumber" | "eth_call" | "eth_chainId" | "eth_estimateGas" | "eth_feeHistory" | "eth_gasPrice" | "eth_getAccount" | "eth_getBalance" | "eth_getBlockByHash" | "eth_getBlockByNumber" | "eth_getBlockReceipts" | "eth_getBlockTransactionCountByHash" | "eth_getBlockTransactionCountByNumber" | "eth_getCode" | "eth_getFilterChanges" | "eth_getFilterLogs" | "eth_getLogs" | "eth_getProof" | "eth_getStorageAt" | "eth_getTransactionByBlockHashAndIndex" | "eth_getTransactionByBlockNumberAndIndex" | "eth_getTransactionByHash" | "eth_getTransactionCount" | "eth_getTransactionReceipt" | "eth_getUncleCountByBlockHash" | "eth_getUncleCountByBlockNumber" | "eth_maxPriorityFeePerGas" | "eth_newBlockFilter" | "eth_newFilter" | "eth_newPendingTransactionFilter" | "eth_sendRawTransaction" | "eth_syncing" | "eth_uninstallFilter" | "personal_sign" | "eth_signTypedData_v4" | "eth_sendTransaction";
    checkIfRequestIsAllowed(request: unknown): boolean;
    isClient: boolean;
};
