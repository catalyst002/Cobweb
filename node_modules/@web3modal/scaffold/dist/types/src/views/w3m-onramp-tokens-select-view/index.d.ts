import type { PurchaseCurrency } from '@web3modal/core';
import { LitElement } from 'lit';
export declare class W3mOnrampTokensView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    selectedCurrency: PurchaseCurrency[];
    tokens: PurchaseCurrency[];
    private tokenImages;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private currenciesTemplate;
    private selectToken;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-onramp-token-select-view': W3mOnrampTokensView;
    }
}
