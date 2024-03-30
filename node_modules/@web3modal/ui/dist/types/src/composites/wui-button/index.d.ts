import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-loading-spinner/index.js';
import '../../components/wui-text/index.js';
import type { BorderRadiusType, ButtonType, SizeType } from '../../utils/TypeUtil.js';
export declare class WuiButton extends LitElement {
    static styles: import("lit").CSSResult[];
    size: Exclude<SizeType, 'inherit' | 'xl' | 'xxs'>;
    disabled: boolean;
    fullWidth: boolean;
    loading: boolean;
    variant: ButtonType;
    private hasIconLeft;
    private hasIconRight;
    borderRadius: Exclude<BorderRadiusType, 'inherit' | 'xxs'>;
    textVariant?: string;
    render(): import("lit-html").TemplateResult<1>;
    handleSlotLeftChange(): void;
    handleSlotRightChange(): void;
    loadingTemplate(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-button': WuiButton;
    }
}
