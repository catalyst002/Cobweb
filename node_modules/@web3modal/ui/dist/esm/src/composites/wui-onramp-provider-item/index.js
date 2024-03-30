var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { AssetUtil, NetworkController } from '@web3modal/core';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import { elementStyles, resetStyles } from '../../utils/ThemeUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import styles from './styles.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let WuiOnRampProviderItem = class WuiOnRampProviderItem extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.color = 'inherit';
        this.label = '';
        this.feeRange = '';
        this.loading = false;
        this.onClick = null;
    }
    render() {
        return html `
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${ifDefined(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading
            ? html `<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`
            : html `<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `;
    }
    networksTemplate() {
        const networks = NetworkController.getRequestedCaipNetworks();
        const slicedNetworks = networks?.filter(network => network?.imageId)?.slice(0, 5);
        return html `
      <wui-flex class="networks">
        ${slicedNetworks?.map(network => html `
            <wui-flex class="network-icon">
              <wui-image src=${ifDefined(AssetUtil.getNetworkImage(network))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `;
    }
};
WuiOnRampProviderItem.styles = [resetStyles, elementStyles, styles];
__decorate([
    property({ type: Boolean })
], WuiOnRampProviderItem.prototype, "disabled", void 0);
__decorate([
    property()
], WuiOnRampProviderItem.prototype, "color", void 0);
__decorate([
    property()
], WuiOnRampProviderItem.prototype, "name", void 0);
__decorate([
    property()
], WuiOnRampProviderItem.prototype, "label", void 0);
__decorate([
    property()
], WuiOnRampProviderItem.prototype, "feeRange", void 0);
__decorate([
    property({ type: Boolean })
], WuiOnRampProviderItem.prototype, "loading", void 0);
__decorate([
    property()
], WuiOnRampProviderItem.prototype, "onClick", void 0);
WuiOnRampProviderItem = __decorate([
    customElement('wui-onramp-provider-item')
], WuiOnRampProviderItem);
export { WuiOnRampProviderItem };
//# sourceMappingURL=index.js.map