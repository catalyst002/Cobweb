import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
export declare class WuiSeparator extends LitElement {
    static styles: import("lit").CSSResult[];
    text?: string | undefined;
    render(): import("lit-html").TemplateResult<1>;
    private template;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-separator': WuiSeparator;
    }
}
