import { LitElement } from 'lit';
import type { LogoType } from '../../utils/TypeUtil.js';
import '../wui-logo/index.js';
export declare class WuiLogoSelect extends LitElement {
    static styles: import("lit").CSSResult[];
    logo: LogoType;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-logo-select': WuiLogoSelect;
    }
}
