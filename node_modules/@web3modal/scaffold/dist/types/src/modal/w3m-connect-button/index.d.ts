import type { WuiConnectButton } from '@web3modal/ui';
import { LitElement } from 'lit';
export declare class W3mConnectButton extends LitElement {
    private unsubscribe;
    size?: WuiConnectButton['size'];
    label?: string | undefined;
    loadingLabel?: string | undefined;
    private open;
    private loading;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-button': W3mConnectButton;
    }
}
