import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import '../../components/wui-image/index.js';
import '../../layout/wui-flex/index.js';
import '../wui-avatar/index.js';
import '../wui-icon-box/index.js';
import type { IconType } from '../../utils/TypeUtil.js';
export declare class WuiProfileButton extends LitElement {
    static styles: import("lit").CSSResult[];
    networkSrc?: string;
    avatarSrc?: string;
    isProfileName: boolean;
    address: string;
    icon: IconType;
    render(): import("lit-html").TemplateResult<1>;
    private networkImageTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-profile-button': WuiProfileButton;
    }
}
