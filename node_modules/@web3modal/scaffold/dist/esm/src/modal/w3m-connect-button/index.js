var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ModalController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let W3mConnectButton = class W3mConnectButton extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.size = 'md';
        this.label = 'Connect Wallet';
        this.loadingLabel = 'Connecting...';
        this.open = ModalController.state.open;
        this.loading = ModalController.state.loading;
        this.unsubscribe.push(ModalController.subscribe(val => {
            this.open = val.open;
            this.loading = val.loading;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const isLoading = this.loading || this.open;
        return html `
      <wui-connect-button
        size=${ifDefined(this.size)}
        .loading=${isLoading}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${isLoading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
    }
    onClick() {
        if (this.open) {
            ModalController.close();
        }
        else if (!this.loading) {
            ModalController.open();
        }
    }
};
__decorate([
    property()
], W3mConnectButton.prototype, "size", void 0);
__decorate([
    property()
], W3mConnectButton.prototype, "label", void 0);
__decorate([
    property()
], W3mConnectButton.prototype, "loadingLabel", void 0);
__decorate([
    state()
], W3mConnectButton.prototype, "open", void 0);
__decorate([
    state()
], W3mConnectButton.prototype, "loading", void 0);
W3mConnectButton = __decorate([
    customElement('w3m-connect-button')
], W3mConnectButton);
export { W3mConnectButton };
//# sourceMappingURL=index.js.map