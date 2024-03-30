import { LitElement } from 'lit';
export declare class W3mConnectingWcView extends LitElement {
    private interval?;
    private lastRetry;
    private wallet;
    private platform?;
    private platforms;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private initializeConnection;
    private finalizeConnection;
    private determinePlatforms;
    private platformTemplate;
    private headerTemplate;
    private onSelectPlatform;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-wc-view': W3mConnectingWcView;
    }
}
