import { LitElement } from 'lit';
export declare class W3mEmailVerifyDeviceView extends LitElement {
    static styles: import("lit").CSSResult;
    protected readonly email: string | undefined;
    protected readonly emailConnector: import("@web3modal/core").EmailConnector | undefined;
    constructor();
    private loading;
    render(): import("lit-html").TemplateResult<1>;
    private listenForDeviceApproval;
    private onResendCode;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-email-verify-device-view': W3mEmailVerifyDeviceView;
    }
}
