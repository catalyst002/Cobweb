import { LitElement } from 'lit';
import '../../components/wui-image/index.js';
import '../../components/wui-text/index.js';
import '../../layout/wui-flex/index.js';
import '../wui-avatar/index.js';
import '../wui-icon-box/index.js';
export declare class WuiAccountButton extends LitElement {
    static styles: import("lit").CSSResult[];
    networkSrc?: string;
    avatarSrc?: string;
    balance?: string;
    isUnsupportedChain?: boolean;
    disabled: boolean;
    isProfileName: boolean;
    address: string;
    charsStart: number;
    charsEnd: number;
    render(): import("lit-html").TemplateResult<1>;
    private balanceTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-account-button': WuiAccountButton;
    }
}
