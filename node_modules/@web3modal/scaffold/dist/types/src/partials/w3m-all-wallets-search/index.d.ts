import { LitElement } from 'lit';
export declare class W3mAllWalletsSearch extends LitElement {
    static styles: import("lit").CSSResult;
    private prevQuery;
    private loading;
    private query;
    render(): import("lit-html").TemplateResult<1>;
    private onSearch;
    private walletsTemplate;
    private onConnectWallet;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-all-wallets-search': W3mAllWalletsSearch;
    }
}
