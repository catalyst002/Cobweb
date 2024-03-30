import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-image/index.js';
import '../../components/wui-text/index.js';
import type { ChipType, IconType } from '../../utils/TypeUtil.js';
export declare class WuiChipButton extends LitElement {
    static styles: import("lit").CSSResult[];
    variant: ChipType;
    imageSrc: string;
    disabled: boolean;
    icon: IconType;
    text: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-chip-button': WuiChipButton;
    }
}
