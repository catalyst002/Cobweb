import type { PaymentCurrency } from '@web3modal/core';
import { LitElement } from 'lit';
export declare class W3mOnrampFiatSelectView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    selectedCurrency: PaymentCurrency;
    currencies: PaymentCurrency[];
    private currencyImages;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private currenciesTemplate;
    private selectCurrency;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-onramp-fiat-select-view': W3mOnrampFiatSelectView;
    }
}
