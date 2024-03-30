import { W3mConnectingWidget } from '../../utils/w3m-connecting-widget/index.js';
export declare class W3mConnectingWcQrcode extends W3mConnectingWidget {
    static styles: import("lit").CSSResult;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onRenderProxy;
    private qrCodeTemplate;
    private copyTemplate;
    private forceUpdate;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-wc-qrcode': W3mConnectingWcQrcode;
    }
}
