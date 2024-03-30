var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { OptionsController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import styles from './styles.js';
let W3mLegalFooter = class W3mLegalFooter extends LitElement {
    render() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
        if (!termsConditionsUrl && !privacyPolicyUrl) {
            return null;
        }
        return html `
      <wui-flex .padding=${['m', 's', 's', 's']} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
    }
    andTemplate() {
        const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
        return termsConditionsUrl && privacyPolicyUrl ? 'and' : '';
    }
    termsTemplate() {
        const { termsConditionsUrl } = OptionsController.state;
        if (!termsConditionsUrl) {
            return null;
        }
        return html `<a href=${termsConditionsUrl}>Terms of Service</a>`;
    }
    privacyTemplate() {
        const { privacyPolicyUrl } = OptionsController.state;
        if (!privacyPolicyUrl) {
            return null;
        }
        return html `<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
    }
};
W3mLegalFooter.styles = [styles];
W3mLegalFooter = __decorate([
    customElement('w3m-legal-footer')
], W3mLegalFooter);
export { W3mLegalFooter };
//# sourceMappingURL=index.js.map