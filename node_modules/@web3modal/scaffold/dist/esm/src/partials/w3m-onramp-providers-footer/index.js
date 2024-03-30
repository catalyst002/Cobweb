var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OptionsController, RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import styles from './styles.js';
let W3mOnRampProvidersFooter = class W3mOnRampProvidersFooter extends LitElement {
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
        if (!termsConditionsUrl && !privacyPolicyUrl) {
            return null;
        }
        return html `
      <wui-flex
        .padding=${['m', 's', 's', 's']}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to fit your buyer needs, region, and to get you the lowest
          fees
        </wui-text>

        ${this.whatIsBuyTemplate()}
      </wui-flex>
    `;
    }
    whatIsBuyTemplate() {
        return html ` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      What is Buy
    </wui-link>`;
    }
    onWhatIsBuy() {
        RouterController.push('WhatIsABuy');
    }
};
W3mOnRampProvidersFooter.styles = [styles];
W3mOnRampProvidersFooter = __decorate([
    customElement('w3m-onramp-providers-footer')
], W3mOnRampProvidersFooter);
export { W3mOnRampProvidersFooter };
//# sourceMappingURL=index.js.map