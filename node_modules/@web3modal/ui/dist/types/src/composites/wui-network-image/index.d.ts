import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-image/index.js';
import type { SizeType } from '../../utils/TypeUtil.js';
export declare class WuiNetworkImage extends LitElement {
    static styles: import("lit").CSSResult[];
    size: Exclude<SizeType, 'inherit' | 'xl' | 'xs' | 'mdl' | 'xxs'>;
    name: string;
    imageSrc?: string;
    selected?: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private templateVisual;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-network-image': WuiNetworkImage;
    }
}
