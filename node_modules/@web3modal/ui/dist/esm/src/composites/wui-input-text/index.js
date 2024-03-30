var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import '../../components/wui-icon/index.js';
import { elementStyles, resetStyles } from '../../utils/ThemeUtil.js';
import { customElement } from '../../utils/WebComponentsUtil.js';
import styles from './styles.js';
let WuiInputText = class WuiInputText extends LitElement {
    constructor() {
        super(...arguments);
        this.inputElementRef = createRef();
        this.size = 'md';
        this.disabled = false;
        this.placeholder = '';
        this.type = 'text';
    }
    render() {
        const sizeClass = `wui-size-${this.size}`;
        return html ` ${this.templateIcon()}
      <input
        ${ref(this.inputElementRef)}
        class=${sizeClass}
        type=${this.type}
        enterkeyhint=${ifDefined(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${ifDefined(this.value)}
        .value=${this.value || ''}
      />
      <slot></slot>`;
    }
    templateIcon() {
        if (this.icon) {
            return html `<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
        }
        return null;
    }
    dispatchInputChangeEvent() {
        this.dispatchEvent(new CustomEvent('inputChange', {
            detail: this.inputElementRef.value?.value,
            bubbles: true,
            composed: true
        }));
    }
};
WuiInputText.styles = [resetStyles, elementStyles, styles];
__decorate([
    property()
], WuiInputText.prototype, "size", void 0);
__decorate([
    property()
], WuiInputText.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], WuiInputText.prototype, "disabled", void 0);
__decorate([
    property()
], WuiInputText.prototype, "placeholder", void 0);
__decorate([
    property()
], WuiInputText.prototype, "type", void 0);
__decorate([
    property()
], WuiInputText.prototype, "keyHint", void 0);
__decorate([
    property()
], WuiInputText.prototype, "value", void 0);
WuiInputText = __decorate([
    customElement('wui-input-text')
], WuiInputText);
export { WuiInputText };
//# sourceMappingURL=index.js.map