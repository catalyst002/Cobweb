import { LitElement } from 'lit';
type Currency = {
    name: string;
    symbol: string;
};
export declare class W3mInputCurrency extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    type: 'Token' | 'Fiat';
    value: number;
    currencies: Currency[] | null;
    selectedCurrency: Currency | undefined;
    private currencyImages;
    private tokenImages;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private formatPaymentCurrency;
    private formatPurchaseCurrency;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-swap-input': W3mInputCurrency;
    }
}
export {};
