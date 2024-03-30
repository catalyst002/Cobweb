import { LitElement } from 'lit';
import type { TransactionDirection, TransactionImage, TransactionStatus } from '@web3modal/common';
import type { TransactionType } from '../../utils/TypeUtil.js';
import '../../components/wui-image/index.js';
import '../wui-icon-box/index.js';
export declare class WuiTransactionVisual extends LitElement {
    static styles: import("lit").CSSResult[];
    type?: TransactionType;
    status?: TransactionStatus;
    direction?: TransactionDirection;
    onlyDirectionIcon?: boolean;
    images: TransactionImage[];
    secondImage: TransactionImage;
    render(): import("lit-html").TemplateResult<1>;
    private templateVisual;
    private templateIcon;
    private getDirectionIcon;
    private getIcon;
    private getStatusColor;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-transaction-visual': WuiTransactionVisual;
    }
}
