var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@web3modal/ui';
import { RouterController } from '@web3modal/core';
import { LitElement, html } from 'lit';
let W3mUpgradeToSmartAccountView = class W3mUpgradeToSmartAccountView extends LitElement {
    render() {
        return html `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${['0', '0', 'l', '0']}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
    }
    onboardingTemplate() {
        return html ` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${['0', 'xxl', '0', 'xxl']}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`;
    }
    buttonsTemplate() {
        return html `<wui-flex .padding=${['0', '2l', '0', '2l']} gap="s">
      <wui-button variant="accentBg" @click=${RouterController.goBack} size="lg" borderRadius="xs">
        Do it later
      </wui-button>
      <wui-button size="lg" borderRadius="xs"> Continue </wui-button>
    </wui-flex>`;
    }
};
W3mUpgradeToSmartAccountView = __decorate([
    customElement('w3m-upgrade-to-smart-account-view')
], W3mUpgradeToSmartAccountView);
export { W3mUpgradeToSmartAccountView };
//# sourceMappingURL=index.js.map