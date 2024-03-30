import { LitElement } from 'lit';
export declare class W3mLegalFooter extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1> | null;
    private andTemplate;
    private termsTemplate;
    private privacyTemplate;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-legal-footer': W3mLegalFooter;
    }
}
