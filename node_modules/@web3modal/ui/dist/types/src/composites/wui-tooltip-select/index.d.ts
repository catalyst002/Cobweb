import { LitElement } from 'lit';
import '../wui-tooltip/index.js';
import '../../components/wui-icon/index.js';
import type { IconType } from '../../utils/TypeUtil.js';
export declare class WuiTooltipSelect extends LitElement {
    static styles: import("lit").CSSResult[];
    text: string;
    icon: IconType;
    render(): import("lit-html").TemplateResult<1>;
    private onMouseEnter;
    private onMouseLeave;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-tooltip-select': WuiTooltipSelect;
    }
}
