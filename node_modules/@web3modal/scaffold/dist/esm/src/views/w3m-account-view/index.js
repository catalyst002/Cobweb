var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OptionsController, StorageUtil } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
let W3mAccountView = class W3mAccountView extends LitElement {
    render() {
        const type = StorageUtil.getConnectedConnector();
        return html `
      ${OptionsController.state.enableWalletFeatures && type === 'EMAIL'
            ? this.walletFeaturesTemplate()
            : this.defaultTemplate()}
    `;
    }
    walletFeaturesTemplate() {
        return html `<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
    }
    defaultTemplate() {
        return html `<w3m-account-default-widget></w3m-account-default-widget>`;
    }
};
W3mAccountView = __decorate([
    customElement('w3m-account-view')
], W3mAccountView);
export { W3mAccountView };
//# sourceMappingURL=index.js.map