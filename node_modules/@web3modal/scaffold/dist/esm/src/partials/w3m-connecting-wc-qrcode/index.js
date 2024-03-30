var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AssetUtil, ConnectionController, EventsController, ThemeController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { W3mConnectingWidget } from '../../utils/w3m-connecting-widget/index.js';
import styles from './styles.js';
let W3mConnectingWcQrcode = class W3mConnectingWcQrcode extends W3mConnectingWidget {
    constructor() {
        super();
        this.forceUpdate = () => {
            this.requestUpdate();
        };
        window.addEventListener('resize', this.forceUpdate);
        EventsController.sendEvent({
            type: 'track',
            event: 'SELECT_WALLET',
            properties: { name: this.wallet?.name ?? 'WalletConnect', platform: 'qrcode' }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.forceUpdate);
    }
    render() {
        this.onRenderProxy();
        return html `
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
    onRenderProxy() {
        if (!this.ready && this.uri) {
            this.timeout = setTimeout(() => {
                this.ready = true;
            }, 200);
        }
    }
    qrCodeTemplate() {
        if (!this.uri || !this.ready) {
            return null;
        }
        const size = this.getBoundingClientRect().width - 40;
        const alt = this.wallet ? this.wallet.name : undefined;
        ConnectionController.setWcLinking(undefined);
        ConnectionController.setRecentWallet(this.wallet);
        return html ` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
      alt=${ifDefined(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
    }
    copyTemplate() {
        const inactive = !this.uri || !this.ready;
        return html `<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
    }
};
W3mConnectingWcQrcode.styles = styles;
W3mConnectingWcQrcode = __decorate([
    customElement('w3m-connecting-wc-qrcode')
], W3mConnectingWcQrcode);
export { W3mConnectingWcQrcode };
//# sourceMappingURL=index.js.map