import type { Transaction } from '@web3modal/common';
type TransactionByMonthMap = Record<number, Transaction[]>;
type TransactionByYearMap = Record<number, TransactionByMonthMap>;
export interface TransactionsControllerState {
    transactions: Transaction[];
    coinbaseTransactions: TransactionByYearMap;
    transactionsByYear: TransactionByYearMap;
    loading: boolean;
    empty: boolean;
    next: string | undefined;
}
export declare const TransactionsController: {
    state: TransactionsControllerState;
    subscribe(callback: (newState: TransactionsControllerState) => void): () => void;
    fetchTransactions(accountAddress?: string, onramp?: 'coinbase'): Promise<void>;
    groupTransactionsByYearAndMonth(transactionsMap?: TransactionByYearMap, transactions?: Transaction[]): TransactionByYearMap;
    filterSpamTransactions(transactions: Transaction[]): Transaction[];
    resetTransactions(): void;
};
export {};
