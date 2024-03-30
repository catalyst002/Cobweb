import { LitElement } from 'lit';
export declare class W3mConnectView extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    private connectors;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private walletConnectConnectorTemplate;
    private customTemplate;
    private featuredTemplate;
    private recentTemplate;
    private announcedTemplate;
    private injectedTemplate;
    private externalTemplate;
    private allWalletsTemplate;
    private recommendedTemplate;
    private onConnector;
    private filterOutDuplicateWallets;
    private onAllWallets;
    private onConnectWallet;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connect-view': W3mConnectView;
    }
}
