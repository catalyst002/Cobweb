import { LitElement } from 'lit';
export declare class W3mOnRampProvidersView extends LitElement {
    private unsubscribe;
    private providers;
    constructor();
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onRampProvidersTemplate;
    private onClickProvider;
    private getCoinbaseOnRampURL;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-onramp-providers-view': W3mOnRampProvidersView;
    }
}
