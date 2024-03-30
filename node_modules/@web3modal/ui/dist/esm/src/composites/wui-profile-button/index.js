var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import '../../components/wui-image/index.js';
import '../../layout/wui-flex/index.js';
import '../wui-avatar/index.js';
import '../wui-icon-box/index.js';
import { elementStyles, resetStyles } from '../../utils/ThemeUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import styles from './styles.js';
import { UiHelperUtil } from '../../utils/UiHelperUtil.js';
let WuiProfileButton = class WuiProfileButton extends LitElement {
    constructor() {
        super(...arguments);
        this.networkSrc = undefined;
        this.avatarSrc = undefined;
        this.isProfileName = false;
        this.address = '';
        this.icon = 'chevronBottom';
    }
    render() {
        return html ` <button ontouchstart>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${UiHelperUtil.getTruncateString({
            string: this.address,
            charsStart: this.isProfileName ? 18 : 4,
            charsEnd: this.isProfileName ? 0 : 4,
            truncate: this.isProfileName ? 'end' : 'middle'
        })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
    }
    networkImageTemplate() {
        if (this.networkSrc) {
            return html `<wui-image src=${this.networkSrc}></wui-image>`;
        }
        return html `
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
    }
};
WuiProfileButton.styles = [resetStyles, elementStyles, styles];
__decorate([
    property()
], WuiProfileButton.prototype, "networkSrc", void 0);
__decorate([
    property()
], WuiProfileButton.prototype, "avatarSrc", void 0);
__decorate([
    property({ type: Boolean })
], WuiProfileButton.prototype, "isProfileName", void 0);
__decorate([
    property()
], WuiProfileButton.prototype, "address", void 0);
__decorate([
    property()
], WuiProfileButton.prototype, "icon", void 0);
WuiProfileButton = __decorate([
    customElement('wui-profile-button')
], WuiProfileButton);
export { WuiProfileButton };
//# sourceMappingURL=index.js.map