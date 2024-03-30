var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import styles from './styles.js';
import { OptionsController, StorageUtil } from '@web3modal/core';
let W3mConnectingSiwe = class W3mConnectingSiwe extends LitElement {
    constructor() {
        super(...arguments);
        this.dappImageUrl = OptionsController.state.metadata?.icons;
        this.walletImageUrl = StorageUtil.getConnectedWalletImageUrl();
    }
    firstUpdated() {
        const visuals = this.shadowRoot?.querySelectorAll('wui-visual-thumbnail');
        if (visuals?.[0]) {
            this.createAnimation(visuals[0], 'translate(18px)');
        }
        if (visuals?.[1]) {
            this.createAnimation(visuals[1], 'translate(-18px)');
        }
    }
    render() {
        return html `
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
    }
    createAnimation(element, translation) {
        element.animate([{ transform: 'translateX(0px)' }, { transform: translation }], {
            duration: 1600,
            easing: 'cubic-bezier(0.56, 0, 0.48, 1)',
            direction: 'alternate',
            iterations: Infinity
        });
    }
};
W3mConnectingSiwe.styles = styles;
W3mConnectingSiwe = __decorate([
    customElement('w3m-connecting-siwe')
], W3mConnectingSiwe);
export { W3mConnectingSiwe };
//# sourceMappingURL=index.js.map