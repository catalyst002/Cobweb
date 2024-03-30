var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import styles from './styles.js';
import '../wui-tooltip/index.js';
import '../../components/wui-icon/index.js';
import { elementStyles, resetStyles } from '../../utils/ThemeUtil.js';
let WuiTooltipSelect = class WuiTooltipSelect extends LitElement {
    constructor() {
        super(...arguments);
        this.text = '';
        this.icon = 'card';
    }
    render() {
        return html `<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`;
    }
    onMouseEnter() {
        const element = this.shadowRoot?.querySelector('wui-tooltip');
        if (element) {
            element?.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: 'forwards',
                easing: 'ease',
                duration: 250
            });
        }
    }
    onMouseLeave() {
        const element = this.shadowRoot?.querySelector('wui-tooltip');
        if (element) {
            element?.animate([{ opacity: 1 }, { opacity: 0 }], {
                fill: 'forwards',
                easing: 'ease',
                duration: 200
            });
        }
    }
};
WuiTooltipSelect.styles = [resetStyles, elementStyles, styles];
__decorate([
    property()
], WuiTooltipSelect.prototype, "text", void 0);
__decorate([
    property()
], WuiTooltipSelect.prototype, "icon", void 0);
WuiTooltipSelect = __decorate([
    customElement('wui-tooltip-select')
], WuiTooltipSelect);
export { WuiTooltipSelect };
//# sourceMappingURL=index.js.map