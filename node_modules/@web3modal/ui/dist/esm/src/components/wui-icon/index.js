var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { colorStyles, resetStyles } from '../../utils/ThemeUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import styles from './styles.js';
import { allWalletsSvg } from '../../assets/svg/all-wallets.js';
import { arrowBottomCircleSvg } from '../../assets/svg/arrow-bottom-circle.js';
import { appStoreSvg } from '../../assets/svg/app-store.js';
import { appleSvg } from '../../assets/svg/apple.js';
import { arrowBottomSvg } from '../../assets/svg/arrow-bottom.js';
import { arrowLeftSvg } from '../../assets/svg/arrow-left.js';
import { arrowRightSvg } from '../../assets/svg/arrow-right.js';
import { arrowTopSvg } from '../../assets/svg/arrow-top.js';
import { browserSvg } from '../../assets/svg/browser.js';
import { checkmarkSvg } from '../../assets/svg/checkmark.js';
import { chevronBottomSvg } from '../../assets/svg/chevron-bottom.js';
import { chevronLeftSvg } from '../../assets/svg/chevron-left.js';
import { chevronRightSvg } from '../../assets/svg/chevron-right.js';
import { chevronTopSvg } from '../../assets/svg/chevron-top.js';
import { chromeStoreSvg } from '../../assets/svg/chrome-store.js';
import { clockSvg } from '../../assets/svg/clock.js';
import { closeSvg } from '../../assets/svg/close.js';
import { coinPlaceholderSvg } from '../../assets/svg/coinPlaceholder.js';
import { compassSvg } from '../../assets/svg/compass.js';
import { copySvg } from '../../assets/svg/copy.js';
import { addSvg } from '../../assets/svg/add.js';
import { cursorSvg } from '../../assets/svg/cursor.js';
import { desktopSvg } from '../../assets/svg/desktop.js';
import { disconnectSvg } from '../../assets/svg/disconnect.js';
import { discordSvg } from '../../assets/svg/discord.js';
import { etherscanSvg } from '../../assets/svg/etherscan.js';
import { extensionSvg } from '../../assets/svg/extension.js';
import { externalLinkSvg } from '../../assets/svg/external-link.js';
import { facebookSvg } from '../../assets/svg/facebook.js';
import { filtersSvg } from '../../assets/svg/filters.js';
import { githubSvg } from '../../assets/svg/github.js';
import { googleSvg } from '../../assets/svg/google.js';
import { helpCircleSvg } from '../../assets/svg/help-circle.js';
import { infoCircleSvg } from '../../assets/svg/info-circle.js';
import { mailSvg } from '../../assets/svg/mail.js';
import { mobileSvg } from '../../assets/svg/mobile.js';
import { networkPlaceholderSvg } from '../../assets/svg/network-placeholder.js';
import { nftPlaceholderSvg } from '../../assets/svg/nftPlaceholder.js';
import { offSvg } from '../../assets/svg/off.js';
import { playStoreSvg } from '../../assets/svg/play-store.js';
import { qrCodeIcon } from '../../assets/svg/qr-code.js';
import { refreshSvg } from '../../assets/svg/refresh.js';
import { searchSvg } from '../../assets/svg/search.js';
import { sendSvg } from '../../assets/svg/send.js';
import { swapHorizontalSvg } from '../../assets/svg/swapHorizontal.js';
import { swapHorizontalBoldSvg } from '../../assets/svg/swapHorizontalBold.js';
import { swapHorizontalMediumSvg } from '../../assets/svg/swapHorizontalMedium.js';
import { swapVerticalSvg } from '../../assets/svg/swapVertical.js';
import { telegramSvg } from '../../assets/svg/telegram.js';
import { twitchSvg } from '../../assets/svg/twitch.js';
import { twitterSvg } from '../../assets/svg/twitter.js';
import { twitterIconSvg } from '../../assets/svg/twitterIcon.js';
import { verifySvg } from '../../assets/svg/verify.js';
import { verifyFilledSvg } from '../../assets/svg/verify-filled.js';
import { walletPlaceholderSvg } from '../../assets/svg/wallet-placeholder.js';
import { walletSvg } from '../../assets/svg/wallet.js';
import { walletConnectSvg } from '../../assets/svg/walletconnect.js';
import { warningCircleSvg } from '../../assets/svg/warning-circle.js';
import { recycleHorizontalSvg } from '../../assets/svg/recycle-horizontal.js';
import { bankSvg } from '../../assets/svg/bank.js';
import { cardSvg } from '../../assets/svg/card.js';
import { plusSvg } from '../../assets/svg/plus.js';
import { cursorTransparentSvg } from '../../assets/svg/cursor-transparent.js';
const svgOptions = {
    add: addSvg,
    allWallets: allWalletsSvg,
    arrowBottomCircle: arrowBottomCircleSvg,
    appStore: appStoreSvg,
    apple: appleSvg,
    arrowBottom: arrowBottomSvg,
    arrowLeft: arrowLeftSvg,
    arrowRight: arrowRightSvg,
    arrowTop: arrowTopSvg,
    bank: bankSvg,
    browser: browserSvg,
    card: cardSvg,
    checkmark: checkmarkSvg,
    chevronBottom: chevronBottomSvg,
    chevronLeft: chevronLeftSvg,
    chevronRight: chevronRightSvg,
    chevronTop: chevronTopSvg,
    chromeStore: chromeStoreSvg,
    clock: clockSvg,
    close: closeSvg,
    compass: compassSvg,
    coinPlaceholder: coinPlaceholderSvg,
    copy: copySvg,
    cursor: cursorSvg,
    cursorTransparent: cursorTransparentSvg,
    desktop: desktopSvg,
    disconnect: disconnectSvg,
    discord: discordSvg,
    etherscan: etherscanSvg,
    extension: extensionSvg,
    externalLink: externalLinkSvg,
    facebook: facebookSvg,
    filters: filtersSvg,
    github: githubSvg,
    google: googleSvg,
    helpCircle: helpCircleSvg,
    infoCircle: infoCircleSvg,
    mail: mailSvg,
    mobile: mobileSvg,
    networkPlaceholder: networkPlaceholderSvg,
    nftPlaceholder: nftPlaceholderSvg,
    off: offSvg,
    playStore: playStoreSvg,
    plus: plusSvg,
    qrCode: qrCodeIcon,
    recycleHorizontal: recycleHorizontalSvg,
    refresh: refreshSvg,
    search: searchSvg,
    send: sendSvg,
    swapHorizontal: swapHorizontalSvg,
    swapHorizontalMedium: swapHorizontalMediumSvg,
    swapHorizontalBold: swapHorizontalBoldSvg,
    swapVertical: swapVerticalSvg,
    telegram: telegramSvg,
    twitch: twitchSvg,
    twitter: twitterSvg,
    twitterIcon: twitterIconSvg,
    verify: verifySvg,
    verifyFilled: verifyFilledSvg,
    wallet: walletSvg,
    walletConnect: walletConnectSvg,
    walletPlaceholder: walletPlaceholderSvg,
    warningCircle: warningCircleSvg
};
let WuiIcon = class WuiIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.name = 'copy';
        this.color = 'fg-300';
    }
    render() {
        this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `;
        return html `${svgOptions[this.name]}`;
    }
};
WuiIcon.styles = [resetStyles, colorStyles, styles];
__decorate([
    property()
], WuiIcon.prototype, "size", void 0);
__decorate([
    property()
], WuiIcon.prototype, "name", void 0);
__decorate([
    property()
], WuiIcon.prototype, "color", void 0);
WuiIcon = __decorate([
    customElement('wui-icon')
], WuiIcon);
export { WuiIcon };
//# sourceMappingURL=index.js.map