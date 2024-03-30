import { LitElement } from 'lit';
export declare class W3mAllWalletsView extends LitElement {
    private search;
    render(): import("lit-html").TemplateResult<1>;
    private onInputChange;
    private onDebouncedSearch;
    private qrButtonTemplate;
    private onWalletConnectQr;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-all-wallets-view': W3mAllWalletsView;
    }
}
