import { LitElement } from 'lit';
export declare class WuiImage extends LitElement {
    static styles: import("lit").CSSResult[];
    src: string;
    alt: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-image': WuiImage;
    }
}
