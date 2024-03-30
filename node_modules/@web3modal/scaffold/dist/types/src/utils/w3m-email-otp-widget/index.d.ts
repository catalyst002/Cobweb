import { LitElement } from 'lit';
export type OnOtpSubmitFn = (otp: string) => Promise<void>;
export type OnOtpResendFn = (email: string) => Promise<void>;
export type OnStartOverFn = () => void;
export declare class W3mEmailOtpWidget extends LitElement {
    static styles: import("lit").CSSResult;
    private loading;
    private timeoutTimeLeft;
    private error;
    private otp;
    private OTPTimeout;
    email: string | undefined;
    onOtpSubmit: OnOtpSubmitFn | undefined;
    onOtpResend: OnOtpResendFn | undefined;
    onStartOver: OnStartOverFn | undefined;
    emailConnector: import("@web3modal/core").EmailConnector | undefined;
    firstUpdated(): void;
    disconnectedCallback(): void;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private startOTPTimeout;
    private onOtpInputChange;
    private onResendCode;
    private getFooterLabels;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-email-otp-widget': W3mEmailOtpWidget;
    }
}
