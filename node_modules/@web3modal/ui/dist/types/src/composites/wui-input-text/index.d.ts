import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import type { IconType, InputType, SizeType } from '../../utils/TypeUtil.js';
export declare class WuiInputText extends LitElement {
    static styles: import("lit").CSSResult[];
    inputElementRef: import("lit-html/directives/ref.js").Ref<HTMLInputElement>;
    size: Exclude<SizeType, 'inherit' | 'xl' | 'xs' | 'xxs'>;
    icon?: IconType;
    disabled: boolean;
    placeholder: string;
    type: InputType;
    keyHint?: HTMLInputElement['enterKeyHint'];
    value?: string;
    render(): import("lit-html").TemplateResult<1>;
    private templateIcon;
    private dispatchInputChangeEvent;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-input-text': WuiInputText;
    }
}
