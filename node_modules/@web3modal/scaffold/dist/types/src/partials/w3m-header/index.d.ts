import { LitElement } from 'lit';
export declare class W3mHeader extends LitElement {
    static styles: import("lit").CSSResult[];
    private unsubscribe;
    private heading;
    private buffering;
    private showBack;
    constructor();
    disconnectCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onWalletHelp;
    private onClose;
    private titleTemplate;
    private dynamicButtonTemplate;
    private separatorTemplate;
    private getPadding;
    private onViewChange;
    private onHistoryChange;
    private onGoBack;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-header': W3mHeader;
    }
}
