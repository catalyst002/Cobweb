import { LitElement } from 'lit';
import '../../components/wui-text/index.js';
import '../wui-network-image/index.js';
export declare class WuiListNetwork extends LitElement {
    static styles: import("lit").CSSResult[];
    imageSrc?: string | undefined;
    name: string;
    disabled: boolean;
    transparent: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private templateNetworkImage;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-list-network': WuiListNetwork;
    }
}
