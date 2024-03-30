var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ApiController, AssetUtil, ConnectorController, RouterController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './styles.js';
import { markWalletsAsInstalled } from '../../utils/markWalletsAsInstalled.js';
const PAGINATOR_ID = 'local-paginator';
let W3mAllWalletsList = class W3mAllWalletsList extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.paginationObserver = undefined;
        this.initial = !ApiController.state.wallets.length;
        this.wallets = ApiController.state.wallets;
        this.recommended = ApiController.state.recommended;
        this.featured = ApiController.state.featured;
        this.unsubscribe.push(...[
            ApiController.subscribeKey('wallets', val => (this.wallets = val)),
            ApiController.subscribeKey('recommended', val => (this.recommended = val)),
            ApiController.subscribeKey('featured', val => (this.featured = val))
        ]);
    }
    firstUpdated() {
        this.initialFetch();
        this.createPaginationObserver();
    }
    disconnectedCallback() {
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
        this.paginationObserver?.disconnect();
    }
    render() {
        return html `
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${['0', 's', 's', 's']}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
    }
    async initialFetch() {
        const gridEl = this.shadowRoot?.querySelector('wui-grid');
        if (this.initial && gridEl) {
            await ApiController.fetchWallets({ page: 1 });
            await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            }).finished;
            this.initial = false;
            gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    shimmerTemplate(items, id) {
        return [...Array(items)].map(() => html `
        <wui-card-select-loader type="wallet" id=${ifDefined(id)}></wui-card-select-loader>
      `);
    }
    walletsTemplate() {
        const wallets = [...this.featured, ...this.recommended, ...this.wallets];
        const walletsWithInstalled = markWalletsAsInstalled(wallets);
        return walletsWithInstalled.map(wallet => html `
        <wui-card-select
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${() => this.onConnectWallet(wallet)}
          .installed=${wallet.installed}
        ></wui-card-select>
      `);
    }
    paginationLoaderTemplate() {
        const { wallets, recommended, featured, count } = ApiController.state;
        const columns = window.innerWidth < 352 ? 3 : 4;
        const currentWallets = wallets.length + recommended.length;
        const minimumRows = Math.ceil(currentWallets / columns);
        let shimmerCount = minimumRows * columns - currentWallets + columns;
        shimmerCount -= wallets.length ? featured.length % columns : 0;
        if (count === 0 && featured.length > 0) {
            return null;
        }
        if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
            return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
        }
        return null;
    }
    createPaginationObserver() {
        const loaderEl = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
        if (loaderEl) {
            this.paginationObserver = new IntersectionObserver(([element]) => {
                if (element?.isIntersecting && !this.initial) {
                    const { page, count, wallets } = ApiController.state;
                    if (wallets.length < count) {
                        ApiController.fetchWallets({ page: page + 1 });
                    }
                }
            });
            this.paginationObserver.observe(loaderEl);
        }
    }
    onConnectWallet(wallet) {
        const { connectors } = ConnectorController.state;
        const connector = connectors.find(({ explorerId }) => explorerId === wallet.id);
        if (connector) {
            RouterController.push('ConnectingExternal', { connector });
        }
        else {
            RouterController.push('ConnectingWalletConnect', { wallet });
        }
    }
};
W3mAllWalletsList.styles = styles;
__decorate([
    state()
], W3mAllWalletsList.prototype, "initial", void 0);
__decorate([
    state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate([
    state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate([
    state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate([
    customElement('w3m-all-wallets-list')
], W3mAllWalletsList);
export { W3mAllWalletsList };
//# sourceMappingURL=index.js.map