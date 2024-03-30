import type { VisualType } from '@web3modal/ui';
import { LitElement } from 'lit';
type Data = {
    images: VisualType[];
    title: string;
    text: string;
};
export declare class W3mHelpWidget extends LitElement {
    data: Data[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-help-widget': W3mHelpWidget;
    }
}
export {};
