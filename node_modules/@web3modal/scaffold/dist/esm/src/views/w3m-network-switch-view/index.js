var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AssetUtil, NetworkController, OptionsController, RouterController, RouterUtil } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
let W3mNetworkSwitchView = class W3mNetworkSwitchView extends LitElement {
    constructor() {
        super();
        this.network = RouterController.state.data?.network;
        this.unsubscribe = [];
        this.showRetry = false;
        this.error = false;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    firstUpdated() {
        this.onSwitchNetwork();
    }
    render() {
        if (!this.network) {
            throw new Error('w3m-network-switch-view: No network provided');
        }
        this.onShowRetry();
        const label = this.error ? 'Switch declined' : 'Approve in wallet';
        const subLabel = this.error
            ? 'Switch can be declined if chain is not supported by a wallet or previous request is still active'
            : 'Accept connection request in your wallet';
        return html `
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', '3xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html `<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    async onSwitchNetwork() {
        try {
            this.error = false;
            if (this.network) {
                await NetworkController.switchActiveNetwork(this.network);
                if (!OptionsController.state.isSiweEnabled) {
                    RouterUtil.navigateAfterNetworkSwitch();
                }
            }
        }
        catch {
            this.error = true;
        }
    }
};
W3mNetworkSwitchView.styles = styles;
__decorate([
    state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate([
    state()
], W3mNetworkSwitchView.prototype, "error", void 0);
W3mNetworkSwitchView = __decorate([
    customElement('w3m-network-switch-view')
], W3mNetworkSwitchView);
export { W3mNetworkSwitchView };
//# sourceMappingURL=index.js.map