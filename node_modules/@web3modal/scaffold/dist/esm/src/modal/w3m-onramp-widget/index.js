var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, ModalController, OnRampController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import styles from './styles.js';
const PAYMENT_CURRENCY_SYMBOLS = {
    USD: '$',
    EUR: '€',
    GBP: '£'
};
const BUY_PRESET_AMOUNTS = [100, 250, 500, 1000];
let W3mOnrampWidget = class W3mOnrampWidget extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.disabled = false;
        this.connected = AccountController.state.isConnected;
        this.loading = ModalController.state.loading;
        this.paymentCurrency = OnRampController.state.paymentCurrency;
        this.paymentAmount = OnRampController.state.paymentAmount;
        this.purchaseAmount = OnRampController.state.purchaseAmount;
        this.quoteLoading = OnRampController.state.quotesLoading;
        this.unsubscribe.push(...[
            AccountController.subscribeKey('isConnected', val => {
                this.connected = val;
            }),
            ModalController.subscribeKey('loading', val => {
                this.loading = val;
            }),
            OnRampController.subscribe(val => {
                this.paymentCurrency = val.paymentCurrency;
                this.paymentAmount = val.paymentAmount;
                this.purchaseAmount = val.purchaseAmount;
                this.quoteLoading = val.quotesLoading;
            })
        ]);
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return html `
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount || 0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount || 0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${BUY_PRESET_AMOUNTS.map(amount => html `<wui-button
                  variant=${this.paymentAmount === amount ? 'accentBg' : 'shade'}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${() => this.selectPresetAmount(amount)}
                  >${`${PAYMENT_CURRENCY_SYMBOLS[this.paymentCurrency?.id || 'USD']} ${amount}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `;
    }
    templateButton() {
        return this.connected
            ? html `<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`
            : html `<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`;
    }
    getQuotes() {
        if (!this.loading) {
            ModalController.open({ view: 'OnRampProviders' });
        }
    }
    openModal() {
        ModalController.open({ view: 'Connect' });
    }
    async onPaymentAmountChange(event) {
        OnRampController.setPaymentAmount(Number(event.detail));
        await OnRampController.getQuote();
    }
    async selectPresetAmount(amount) {
        OnRampController.setPaymentAmount(amount);
        await OnRampController.getQuote();
    }
};
W3mOnrampWidget.styles = styles;
__decorate([
    property({ type: Boolean })
], W3mOnrampWidget.prototype, "disabled", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "connected", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "loading", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "paymentCurrency", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "paymentAmount", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "purchaseAmount", void 0);
__decorate([
    state()
], W3mOnrampWidget.prototype, "quoteLoading", void 0);
W3mOnrampWidget = __decorate([
    customElement('w3m-onramp-widget')
], W3mOnrampWidget);
export { W3mOnrampWidget };
//# sourceMappingURL=index.js.map