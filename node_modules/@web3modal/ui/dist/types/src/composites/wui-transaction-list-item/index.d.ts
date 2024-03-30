import { LitElement } from 'lit';
import { type TransactionType } from '../../utils/TypeUtil.js';
import type { TransactionStatus, TransactionDirection, TransactionImage } from '@web3modal/common';
import '../../components/wui-text/index.js';
import '../wui-transaction-visual/index.js';
export declare class WuiTransactionListItem extends LitElement {
    static styles: import("lit").CSSResult[];
    type: TransactionType;
    descriptions?: string[];
    date?: string;
    onlyDirectionIcon?: boolean;
    status?: TransactionStatus;
    direction?: TransactionDirection;
    images: TransactionImage[];
    price: TransactionImage[];
    amount: TransactionImage[];
    symbol: TransactionImage[];
    render(): import("lit-html").TemplateResult<1>;
    private templateDescription;
    private templateSecondDescription;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-transaction-list-item': WuiTransactionListItem;
    }
}
