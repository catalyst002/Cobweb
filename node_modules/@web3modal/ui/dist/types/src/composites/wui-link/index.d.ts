import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import type { ColorType } from '../../utils/TypeUtil.js';
export declare class WuiLink extends LitElement {
    static styles: import("lit").CSSResult[];
    disabled: boolean;
    color: ColorType;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-link': WuiLink;
    }
}
