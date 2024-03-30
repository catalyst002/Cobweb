var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AccountController, ConnectionController, AssetController, CoreHelperUtil, EventsController, ModalController, NetworkController, RouterController, SnackController, StorageUtil, ConnectorController } from '@web3modal/core';
import { UiHelperUtil, customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
let W3mAccountSettingsView = class W3mAccountSettingsView extends LitElement {
    constructor() {
        super();
        this.usubscribe = [];
        this.networkImages = AssetController.state.networkImages;
        this.address = AccountController.state.address;
        this.profileImage = AccountController.state.profileImage;
        this.profileName = AccountController.state.profileName;
        this.network = NetworkController.state.caipNetwork;
        this.disconnecting = false;
        this.usubscribe.push(...[
            AccountController.subscribe(val => {
                if (val.address) {
                    this.address = val.address;
                    this.profileImage = val.profileImage;
                    this.profileName = val.profileName;
                }
                else {
                    ModalController.close();
                }
            })
        ], NetworkController.subscribeKey('caipNetwork', val => {
            if (val?.id) {
                this.network = val;
            }
        }));
    }
    disconnectedCallback() {
        this.usubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        if (!this.address) {
            throw new Error('w3m-account-settings-view: No account provided');
        }
        const networkImage = this.networkImages[this.network?.imageId ?? ''];
        return html `
      <wui-flex
        flexDirection="column"
        .padding=${['0', 'xl', 'm', 'xl']}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ifDefined(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName
            ? UiHelperUtil.getTruncateString({
                string: this.profileName,
                charsStart: 20,
                charsEnd: 0,
                truncate: 'end'
            })
            : UiHelperUtil.getTruncateString({
                string: this.address,
                charsStart: 4,
                charsEnd: 6,
                truncate: 'middle'
            })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${['0', 'xl', 'm', 'xl']}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${networkImage ? 'image' : 'icon'}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ifDefined(networkImage)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name ?? 'Unknown'}
            </wui-text>
          </wui-list-item>
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${false}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
    }
    isAllowedNetworkSwitch() {
        const { requestedCaipNetworks } = NetworkController.state;
        const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
        const isValidNetwork = requestedCaipNetworks?.find(({ id }) => id === this.network?.id);
        return isMultiNetwork || !isValidNetwork;
    }
    onCopyAddress() {
        try {
            if (this.address) {
                CoreHelperUtil.copyToClopboard(this.address);
                SnackController.showSuccess('Address copied');
            }
        }
        catch {
            SnackController.showError('Failed to copy');
        }
    }
    emailBtnTemplate() {
        const type = StorageUtil.getConnectedConnector();
        const emailConnector = ConnectorController.getEmailConnector();
        if (!emailConnector || type !== 'EMAIL') {
            return null;
        }
        const email = emailConnector.provider.getEmail() ?? '';
        return html `
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${true}
        @click=${() => this.onGoToUpdateEmail(email)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${email}</wui-text>
      </wui-list-item>
    `;
    }
    onGoToUpdateEmail(email) {
        RouterController.push('UpdateEmailWallet', { email });
    }
    onNetworks() {
        if (this.isAllowedNetworkSwitch()) {
            RouterController.push('Networks');
        }
    }
    async onDisconnect() {
        try {
            this.disconnecting = true;
            await ConnectionController.disconnect();
            EventsController.sendEvent({ type: 'track', event: 'DISCONNECT_SUCCESS' });
            ModalController.close();
        }
        catch {
            EventsController.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' });
            SnackController.showError('Failed to disconnect');
        }
        finally {
            this.disconnecting = false;
        }
    }
};
W3mAccountSettingsView.styles = styles;
__decorate([
    state()
], W3mAccountSettingsView.prototype, "address", void 0);
__decorate([
    state()
], W3mAccountSettingsView.prototype, "profileImage", void 0);
__decorate([
    state()
], W3mAccountSettingsView.prototype, "profileName", void 0);
__decorate([
    state()
], W3mAccountSettingsView.prototype, "network", void 0);
__decorate([
    state()
], W3mAccountSettingsView.prototype, "disconnecting", void 0);
W3mAccountSettingsView = __decorate([
    customElement('w3m-account-settings-view')
], W3mAccountSettingsView);
export { W3mAccountSettingsView };
//# sourceMappingURL=index.js.map