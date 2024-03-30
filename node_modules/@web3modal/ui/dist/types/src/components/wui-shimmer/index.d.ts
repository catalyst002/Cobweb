import { LitElement } from 'lit';
import type { BorderRadiusType } from '../../utils/TypeUtil.js';
export declare class WuiShimmer extends LitElement {
    static styles: import("lit").CSSResult[];
    width: string;
    height: string;
    borderRadius: BorderRadiusType;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-shimmer': WuiShimmer;
    }
}
