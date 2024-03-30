import { LitElement } from 'lit';
export declare class W3mConnectingSiwe extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly dappImageUrl;
    private readonly walletImageUrl;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private createAnimation;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-siwe': W3mConnectingSiwe;
    }
}
