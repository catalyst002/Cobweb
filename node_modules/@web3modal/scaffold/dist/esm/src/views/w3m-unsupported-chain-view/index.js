var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, AssetUtil, ConnectionController, CoreHelperUtil, EventsController, ModalController, NetworkController, RouterController, RouterUtil, SnackController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
let W3mUnsupportedChainView = class W3mUnsupportedChainView extends LitElement {
    constructor() {
        super(...arguments);
        this.disconecting = false;
    }
    render() {
        return html `
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${['m', 'xl', 'xs', 'xl']}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    networksTemplate() {
        const { approvedCaipNetworkIds, requestedCaipNetworks } = NetworkController.state;
        const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedCaipNetworkIds, requestedCaipNetworks);
        return sortedNetworks.map(network => html `
        <wui-list-network
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          name=${network.name ?? 'Unknown'}
          @click=${() => this.onSwitchNetwork(network)}
        >
        </wui-list-network>
      `);
    }
    async onDisconnect() {
        try {
            this.disconecting = true;
            await ConnectionController.disconnect();
            EventsController.sendEvent({
                type: 'track',
                event: 'DISCONNECT_SUCCESS'
            });
            ModalController.close();
        }
        catch {
            EventsController.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' });
            SnackController.showError('Failed to disconnect');
        }
        finally {
            this.disconecting = false;
        }
    }
    async onSwitchNetwork(network) {
        const { isConnected } = AccountController.state;
        const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
        const { data } = RouterController.state;
        if (isConnected && caipNetwork?.id !== network.id) {
            if (approvedCaipNetworkIds?.includes(network.id)) {
                await NetworkController.switchActiveNetwork(network);
                RouterUtil.navigateAfterNetworkSwitch();
            }
            else if (supportsAllNetworks) {
                RouterController.push('SwitchNetwork', { ...data, network });
            }
        }
        else if (!isConnected) {
            NetworkController.setCaipNetwork(network);
            RouterController.push('Connect');
        }
    }
};
W3mUnsupportedChainView.styles = styles;
__decorate([
    state()
], W3mUnsupportedChainView.prototype, "disconecting", void 0);
W3mUnsupportedChainView = __decorate([
    customElement('w3m-unsupported-chain-view')
], W3mUnsupportedChainView);
export { W3mUnsupportedChainView };
//# sourceMappingURL=index.js.map