import { LitElement } from 'lit';
export declare class W3mNetworkSwitchView extends LitElement {
    static styles: import("lit").CSSResult;
    private network;
    private unsubscribe;
    private showRetry;
    error: boolean;
    constructor();
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onShowRetry;
    private onSwitchNetwork;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-network-switch-view': W3mNetworkSwitchView;
    }
}
