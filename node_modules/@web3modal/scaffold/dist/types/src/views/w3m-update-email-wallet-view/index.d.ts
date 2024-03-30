import { LitElement } from 'lit';
export declare class W3mUpdateEmailWalletView extends LitElement {
    static styles: import("lit").CSSResult;
    private formRef;
    private initialEmail;
    private email;
    private loading;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onEmailInputChange;
    private onSubmitEmail;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-update-email-wallet-view': W3mUpdateEmailWalletView;
    }
}
