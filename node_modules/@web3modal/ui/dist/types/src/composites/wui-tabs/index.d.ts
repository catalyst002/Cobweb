import { LitElement } from 'lit';
import type { IconType } from '../../utils/TypeUtil.js';
import '../../components/wui-icon/index.js';
export declare class WuiTabs extends LitElement {
    static styles: import("lit").CSSResult[];
    tabs: {
        icon?: IconType;
        label: string;
    }[];
    onTabChange: (index: number) => void;
    buttons: HTMLButtonElement[];
    disabled: boolean;
    localTabWidth: string;
    activeTab: number;
    isDense: boolean;
    render(): import("lit-html").TemplateResult<1>[];
    firstUpdated(): void;
    private iconTemplate;
    private onTabClick;
    private animateTabs;
}
declare global {
    interface HTMLElementTagNameMap {
        'wui-tabs': WuiTabs;
    }
}
