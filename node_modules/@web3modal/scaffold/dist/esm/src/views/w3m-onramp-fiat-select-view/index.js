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
let W3mOnrampFiatSelectView = class W3mOnrampFiatSelectView extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.selectedCurrency = OnRampController.state.paymentCurrency;
        this.currencies = OnRampController.state.paymentCurrencies;
        this.currencyImages = AssetController.state.currencyImages;
        this.unsubscribe.push(...[
            OnRampController.subscribe(val => {
                this.selectedCurrency = val.paymentCurrency;
                this.currencies = val.paymentCurrencies;
            }),
            AssetController.subscribeKey('currencyImages', val => (this.currencyImages = val))
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
        return this.currencies.map(currency => html `
        <wui-list-item
          imageSrc=${ifDefined(this.currencyImages?.[currency.id])}
          @click=${() => this.selectCurrency(currency)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${currency.id}</wui-text>
        </wui-list-item>
      `);
    }
    selectCurrency(currency) {
        if (!currency) {
            return;
        }
        OnRampController.setPaymentCurrency(currency);
        ModalController.close();
    }
};
W3mOnrampFiatSelectView.styles = styles;
__decorate([
    state()
], W3mOnrampFiatSelectView.prototype, "selectedCurrency", void 0);
__decorate([
    state()
], W3mOnrampFiatSelectView.prototype, "currencies", void 0);
__decorate([
    state()
], W3mOnrampFiatSelectView.prototype, "currencyImages", void 0);
W3mOnrampFiatSelectView = __decorate([
    customElement('w3m-onramp-fiat-select-view')
], W3mOnrampFiatSelectView);
export { W3mOnrampFiatSelectView };
//# sourceMappingURL=index.js.map