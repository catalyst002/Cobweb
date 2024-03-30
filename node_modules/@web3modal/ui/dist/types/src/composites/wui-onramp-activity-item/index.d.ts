import { LitElement } from 'lit';
import '../../components/wui-icon/index.js';
import '../../components/wui-text/index.js';
import type { ColorType } from '../../utils/TypeUtil.js';
export declare class WuiOnRampActivityItem extends LitElement {
    static styles: import("lit").CSSResult[];
    disabled: boolean;
    color: ColorType;
    label: string;
    purchaseValue: string;
    purchaseCurrency: string;
    date: string;
    completed: boolean;
    inProgress: boolean;
    failed: boolean;
    onClick: (() => void) | null;
    symbol: string;
    icon?: string;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private fetchTokenImage;
    private statusIconTemplate;
    private errorIconTemplate;
    private imageTemplate;
    private boughtIconTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-onramp-activity-item': WuiOnRampActivityItem;
    }
}
