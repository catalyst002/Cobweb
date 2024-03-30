var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SnackController } from '@web3modal/core';
import { customElement } from '@web3modal/ui';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './styles.js';
const presets = {
    success: {
        backgroundColor: 'success-100',
        iconColor: 'success-100',
        icon: 'checkmark'
    },
    error: {
        backgroundColor: 'error-100',
        iconColor: 'error-100',
        icon: 'close'
    }
};
let W3mSnackBar = class W3mSnackBar extends LitElement {
    constructor() {
        super();
        this.unsubscribe = [];
        this.timeout = undefined;
        this.open = SnackController.state.open;
        this.unsubscribe.push(SnackController.subscribeKey('open', val => {
            this.open = val;
            this.onOpen();
        }));
    }
    disconnectedCallback() {
        clearTimeout(this.timeout);
        this.unsubscribe.forEach(unsubscribe => unsubscribe());
    }
    render() {
        const { message, variant } = SnackController.state;
        const preset = presets[variant];
        return html `
      <wui-snackbar
        message=${message}
        backgroundColor=${preset.backgroundColor}
        iconColor=${preset.iconColor}
        icon=${preset.icon}
      ></wui-snackbar>
    `;
    }
    onOpen() {
        clearTimeout(this.timeout);
        if (this.open) {
            this.animate([
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' },
                { opacity: 1, transform: 'translateX(-50%) scale(1)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
            this.timeout = setTimeout(() => SnackController.hide(), 2500);
        }
        else {
            this.animate([
                { opacity: 1, transform: 'translateX(-50%) scale(1)' },
                { opacity: 0, transform: 'translateX(-50%) scale(0.85)' }
            ], {
                duration: 150,
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
};
W3mSnackBar.styles = styles;
__decorate([
    state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate([
    customElement('w3m-snackbar')
], W3mSnackBar);
export { W3mSnackBar };
//# sourceMappingURL=index.js.map