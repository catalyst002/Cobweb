var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
let W3mButton = class W3mButton extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.disabled = false;
        this.balance = undefined;
        this.size = undefined;
        this.label = undefined;
        this.loadingLabel = undefined;
        this.charsStart = 4;
        this.charsEnd = 6;
        this.isAccount = AccountController.state.isConnected;
        this.unsubscribe.push(AccountController.subscribeKey('isConnected', val => {
            this.isAccount = val;
        }));
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return this.isAccount
            ? html `
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined(this.balance)}
            .charsStart=${ifDefined(this.charsStart)}
            .charsEnd=${ifDefined(this.charsEnd)}
          >
          </w3m-account-button>
        `
            : html `
          <w3m-connect-button
            size=${ifDefined(this.size)}
            label=${ifDefined(this.label)}
            loadingLabel=${ifDefined(this.loadingLabel)}
          ></w3m-connect-button>
        `;
    }
};
W3mButton.styles = styles;
__decorate([
    property({ type: Boolean })
], W3mButton.prototype, "disabled", void 0);
__decorate([
    property()
], W3mButton.prototype, "balance", void 0);
__decorate([
    property()
], W3mButton.prototype, "size", void 0);
__decorate([
    property()
], W3mButton.prototype, "label", void 0);
__decorate([
    property()
], W3mButton.prototype, "loadingLabel", void 0);
__decorate([
    property()
], W3mButton.prototype, "charsStart", void 0);
__decorate([
    property()
], W3mButton.prototype, "charsEnd", void 0);
__decorate([
    state()
], W3mButton.prototype, "isAccount", void 0);
W3mButton = __decorate([
    customElement('w3m-button')
], W3mButton);
export { W3mButton };
//# sourceMappingURL=index.js.map