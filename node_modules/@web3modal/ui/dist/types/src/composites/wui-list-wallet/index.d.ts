import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../composites/wui-icon-box/index.js';
import '../../components/wui-text/index.js';
import type { IconType, IWalletImage, TagType } from '../../utils/TypeUtil.js';
import '../wui-all-wallets-image/index.js';
import '../wui-tag/index.js';
import '../wui-wallet-image/index.js';
export declare class WuiListWallet extends LitElement {
    static styles: import("lit").CSSResult[];
    walletImages?: IWalletImage[];
    imageSrc?: string | undefined;
    name: string;
    tagLabel?: string;
    tagVariant?: TagType;
    icon?: IconType;
    walletIcon?: IconType;
    installed: boolean;
    disabled: boolean;
    showAllWallets: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private templateAllWallets;
    private templateWalletImage;
    private templateStatus;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-list-wallet': WuiListWallet;
    }
}
