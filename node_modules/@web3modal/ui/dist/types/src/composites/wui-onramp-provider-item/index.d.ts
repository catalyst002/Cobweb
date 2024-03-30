import { LitElement } from 'lit';
import { type OnRampProvider } from '@web3modal/core';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import type { ColorType } from '../../utils/TypeUtil.js';
export declare class WuiOnRampProviderItem extends LitElement {
    static styles: import("lit").CSSResult[];
    disabled: boolean;
    color: ColorType;
    name?: OnRampProvider['name'];
    label: string;
    feeRange: string;
    loading: boolean;
    onClick: (() => void) | null;
    render(): import("lit-html").TemplateResult<1>;
    private networksTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-onramp-provider-item': WuiOnRampProviderItem;
    }
}
