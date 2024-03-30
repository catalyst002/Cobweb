var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '../../components/wui-text/index.js';
import { resetStyles } from '../../utils/ThemeUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import '../wui-icon-box/index.js';
import styles from './styles.js';
let WuiSnackbar = class WuiSnackbar extends LitElement {
    constructor() {
        super(...arguments);
        this.backgroundColor = 'accent-100';
        this.iconColor = 'accent-100';
        this.icon = 'checkmark';
        this.message = '';
    }
    render() {
        return html `
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `;
    }
};
WuiSnackbar.styles = [resetStyles, styles];
__decorate([
    property()
], WuiSnackbar.prototype, "backgroundColor", void 0);
__decorate([
    property()
], WuiSnackbar.prototype, "iconColor", void 0);
__decorate([
    property()
], WuiSnackbar.prototype, "icon", void 0);
__decorate([
    property()
], WuiSnackbar.prototype, "message", void 0);
WuiSnackbar = __decorate([
    customElement('wui-snackbar')
], WuiSnackbar);
export { WuiSnackbar };
//# sourceMappingURL=index.js.map