import { W3mConnectingWidget } from '../../utils/w3m-connecting-widget/index.js';
export declare class W3mConnectingWcMobile extends W3mConnectingWidget {
    constructor();
    disconnectedCallback(): void;
    private onRenderProxy;
    private onConnectProxy;
    private onBuffering;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-wc-mobile': W3mConnectingWcMobile;
    }
}
