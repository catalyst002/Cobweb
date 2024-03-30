import type { Platform } from '@web3modal/core';
import { LitElement } from 'lit';
export declare class W3mConnectingHeader extends LitElement {
    private platformTabs;
    private unsubscribe;
    platforms: Platform[];
    onSelectPlatfrom?: (platform: Platform) => void;
    private buffering;
    constructor();
    disconnectCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private generateTabs;
    private onTabChange;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-connecting-header': W3mConnectingHeader;
    }
}
