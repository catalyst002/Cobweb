import { LitElement } from 'lit';
import '../../components/wui-image/index.js';
export declare class WuiAvatar extends LitElement {
    static styles: import("lit").CSSResult[];
    imageSrc?: string;
    alt?: string;
    address?: string;
    render(): import("lit-html").TemplateResult<1>;
    visualTemplate(): import("lit-html").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-avatar': WuiAvatar;
    }
}
