import { LitElement } from 'lit';
import type { W3mAccountButton } from '../w3m-account-button/index.js';
import type { W3mConnectButton } from '../w3m-connect-button/index.js';
export declare class W3mButton extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    disabled?: W3mAccountButton['disabled'];
    balance?: W3mAccountButton['balance'];
    size?: W3mConnectButton['size'];
    label?: W3mConnectButton['label'];
    loadingLabel?: W3mConnectButton['loadingLabel'];
    charsStart?: W3mAccountButton['charsStart'];
    charsEnd?: W3mAccountButton['charsEnd'];
    private isAccount;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-button': W3mButton;
    }
}
