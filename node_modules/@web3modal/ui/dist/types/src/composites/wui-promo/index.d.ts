import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import '../../components/wui-icon/index.js';
export declare class WuiPromo extends LitElement {
    static styles: import("lit").CSSResult[];
    text: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-promo': WuiPromo;
    }
}
