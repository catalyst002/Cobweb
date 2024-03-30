var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CoreHelperUtil, RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
let W3mAllWalletsView = class W3mAllWalletsView extends LitElement {
    constructor() {
        super(...arguments);
        this.search = '';
        this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
            this.search = value;
        });
    }
    render() {
        const isSearch = this.search.length >= 2;
        return html `
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch
            ? html `<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`
            : html `<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
    }
    onInputChange(event) {
        this.onDebouncedSearch(event.detail);
    }
    qrButtonTemplate() {
        if (CoreHelperUtil.isMobile()) {
            return html `
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
        }
        return null;
    }
    onWalletConnectQr() {
        RouterController.push('ConnectingWalletConnect');
    }
};
__decorate([
    state()
], W3mAllWalletsView.prototype, "search", void 0);
W3mAllWalletsView = __decorate([
    customElement('w3m-all-wallets-view')
], W3mAllWalletsView);
export { W3mAllWalletsView };
//# sourceMappingURL=index.js.map