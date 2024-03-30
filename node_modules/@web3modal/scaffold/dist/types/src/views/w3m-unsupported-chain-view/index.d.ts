import { LitElement } from 'lit';
export declare class W3mUnsupportedChainView extends LitElement {
    static styles: import("lit").CSSResult;
    private disconecting;
    render(): import("lit-html").TemplateResult<1>;
    private networksTemplate;
    private onDisconnect;
    private onSwitchNetwork;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-unsupported-chain-view': W3mUnsupportedChainView;
    }
}
