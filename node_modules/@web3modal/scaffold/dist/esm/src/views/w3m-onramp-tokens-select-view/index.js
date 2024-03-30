var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OnRampController, ModalController, AssetController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let W3mOnrampTokensView = class W3mOnrampTokensView extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedCurrency = OnRampController.state.purchaseCurrencies;
        this.tokens = OnRampController.state.purchaseCurrencies;
        this.tokenImages = AssetController.state.tokenImages;
        this.unsubscribe.push(...[
            OnRampController.subscribe(val => {
                this.selectedCurrency = val.purchaseCurrencies;
                this.tokens = val.purchaseCurrencies;
            }),
            AssetController.subscribeKey('tokenImages', val => (this.tokenImages = val))
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return html `
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
    }
    currenciesTemplate() {
        return this.tokens.map(token => html `
        <wui-list-item
          imageSrc=${ifDefined(this.tokenImages?.[token.symbol])}
          @click=${() => this.selectToken(token)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${token.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${token.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `);
    }
    selectToken(currency) {
        if (!currency) {
            return;
        }
        OnRampController.setPurchaseCurrency(currency);
        ModalController.close();
    }
};
W3mOnrampTokensView.styles = styles;
__decorate([
    state()
], W3mOnrampTokensView.prototype, "selectedCurrency", void 0);
__decorate([
    state()
], W3mOnrampTokensView.prototype, "tokens", void 0);
__decorate([
    state()
], W3mOnrampTokensView.prototype, "tokenImages", void 0);
W3mOnrampTokensView = __decorate([
    customElement('w3m-onramp-token-select-view')
], W3mOnrampTokensView);
export { W3mOnrampTokensView };
//# sourceMappingURL=index.js.map