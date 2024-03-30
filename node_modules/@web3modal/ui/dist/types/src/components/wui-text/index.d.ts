import { LitElement } from 'lit';
import type { ColorType, TextAlign, TextType } from '../../utils/TypeUtil.js';
export declare class WuiText extends LitElement {
    static styles: import("lit").CSSResult[];
    variant: TextType;
    color: ColorType;
    align?: TextAlign;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-text': WuiText;
    }
}
