import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import type { TagType } from '../../utils/TypeUtil.js';
export declare class WuiTag extends LitElement {
    static styles: import("lit").CSSResult[];
    variant: TagType;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-tag': WuiTag;
    }
}
