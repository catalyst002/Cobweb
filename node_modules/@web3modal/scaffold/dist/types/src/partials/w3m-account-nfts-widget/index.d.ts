import { LitElement } from 'lit';
export declare class W3mAccountNftsWidget extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private nftTemplate;
    private onReceiveClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-nfts-widget': W3mAccountNftsWidget;
    }
}
