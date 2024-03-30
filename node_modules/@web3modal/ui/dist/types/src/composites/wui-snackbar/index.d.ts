import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import type { ColorType, IconType } from '../../utils/TypeUtil.js';
import '../wui-icon-box/index.js';
export declare class WuiSnackbar extends LitElement {
    static styles: import("lit").CSSResult[];
    backgroundColor: ColorType;
    iconColor: ColorType;
    icon: IconType;
    message: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-snackbar': WuiSnackbar;
    }
}
