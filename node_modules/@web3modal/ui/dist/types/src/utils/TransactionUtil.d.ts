import type { TransactionTransfer, Transaction, TransactionImage } from '@web3modal/common';
export declare const TransactionUtil: {
    getMonthName(monthNumber: number): string;
    getTransactionGroupTitle(year: number, month: number): string;
    getTransactionImages(transfers: TransactionTransfer[]): TransactionImage[];
    getTransactionImage(transfer?: TransactionTransfer): TransactionImage;
    getTransactionImageURL(transfer: TransactionTransfer | undefined): string | undefined;
    getTransactionTransferTokenType(transfer?: TransactionTransfer): 'FUNGIBLE' | 'NFT' | undefined;
    getTransactionDescriptions(transaction: Transaction): string[];
    getTransferDescription(transfer?: TransactionTransfer): string;
    getFungibleTransferDescription(transfer?: TransactionTransfer): string | null;
    getQuantityFixedValue(value: string | undefined): string | null;
};
