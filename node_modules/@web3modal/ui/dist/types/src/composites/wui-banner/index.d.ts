import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import '../wui-icon-box/index.js';
import type { IconType } from '../../utils/TypeUtil.js';
export declare class WuiBanner extends LitElement {
    static styles: import("lit").CSSResult[];
    icon: IconType;
    text: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-banner': WuiBanner;
    }
}
