import type { WuiAccountButton } from '@web3modal/ui';
import { LitElement } from 'lit';
export declare class W3mAccountButton extends LitElement {
    private unsubscribe;
    disabled?: WuiAccountButton['disabled'];
    balance?: 'show' | 'hide';
    charsStart?: WuiAccountButton['charsStart'];
    charsEnd?: WuiAccountButton['charsEnd'];
    private address;
    private balanceVal;
    private balanceSymbol;
    private profileName;
    private profileImage;
    private network;
    private isUnsupportedChain;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-account-button': W3mAccountButton;
    }
}
