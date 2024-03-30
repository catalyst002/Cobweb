var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../components/wui-image/index.js';
import '../../components/wui-text/index.js';
import '../../layout/wui-flex/index.js';
import { elementStyles, resetStyles } from '../../utils/ThemeUtil.js';
import { UiHelperUtil } from '../../utils/UiHelperUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import '../wui-avatar/index.js';
import '../wui-icon-box/index.js';
import styles from './styles.js';
let WuiAccountButton = class WuiAccountButton extends LitElement {
    constructor() {
        super(...arguments);
        this.networkSrc = undefined;
        this.avatarSrc = undefined;
        this.balance = undefined;
        this.isUnsupportedChain = undefined;
        this.disabled = false;
        this.isProfileName = false;
        this.address = '';
        this.charsStart = 4;
        this.charsEnd = 6;
    }
    render() {
        return html `
      <button
        ?disabled=${this.disabled}
        class=${ifDefined(this.balance ? undefined : 'local-no-balance')}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${UiHelperUtil.getTruncateString({
            string: this.address,
            charsStart: this.isProfileName ? 18 : this.charsStart,
            charsEnd: this.isProfileName ? 0 : this.charsEnd,
            truncate: this.isProfileName ? 'end' : 'middle'
        })}
          </wui-text>
        </wui-flex>
      </button>
    `;
    }
    balanceTemplate() {
        if (this.isUnsupportedChain) {
            return html ` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;
        }
        if (this.balance) {
            const networkElement = this.networkSrc
                ? html `<wui-image src=${this.networkSrc}></wui-image>`
                : html `
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;
            return html `
        ${networkElement}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `;
        }
        return null;
    }
};
WuiAccountButton.styles = [resetStyles, elementStyles, styles];
__decorate([
    property()
], WuiAccountButton.prototype, "networkSrc", void 0);
__decorate([
    property()
], WuiAccountButton.prototype, "avatarSrc", void 0);
__decorate([
    property()
], WuiAccountButton.prototype, "balance", void 0);
__decorate([
    property({ type: Boolean })
], WuiAccountButton.prototype, "isUnsupportedChain", void 0);
__decorate([
    property({ type: Boolean })
], WuiAccountButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], WuiAccountButton.prototype, "isProfileName", void 0);
__decorate([
    property()
], WuiAccountButton.prototype, "address", void 0);
__decorate([
    property()
], WuiAccountButton.prototype, "charsStart", void 0);
__decorate([
    property()
], WuiAccountButton.prototype, "charsEnd", void 0);
WuiAccountButton = __decorate([
    customElement('wui-account-button')
], WuiAccountButton);
export { WuiAccountButton };
//# sourceMappingURL=index.js.map