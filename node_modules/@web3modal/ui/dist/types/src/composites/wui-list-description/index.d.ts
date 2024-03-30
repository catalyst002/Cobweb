import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import '../../components/wui-image/index.js';
import '../../layout/wui-flex/index.js';
import type { ColorType, IconType } from '../../utils/TypeUtil.js';
export declare class WuiListDescription extends LitElement {
    static styles: import("lit").CSSResult[];
    icon: IconType;
    text: string;
    description: string;
    tag?: string;
    iconBackgroundColor: ColorType;
    iconColor: ColorType;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private titleTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-list-description': WuiListDescription;
    }
}
