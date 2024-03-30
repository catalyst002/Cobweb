import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import '../wui-transaction-visual/index.js';
export declare class WuiTransactionListItemLoader extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-transaction-list-item-loader': WuiTransactionListItemLoader;
    }
}
