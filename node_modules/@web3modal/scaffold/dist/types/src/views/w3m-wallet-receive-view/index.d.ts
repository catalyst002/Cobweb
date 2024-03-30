import { LitElement } from 'lit';
export declare class W3mWalletReceiveView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    private address;
    private profileName;
    private network;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    networkTemplate(): import("lit-html").TemplateResult<1>;
    onReceiveClick(): void;
    onCopyClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wallet-receive-view': W3mWalletReceiveView;
    }
}
