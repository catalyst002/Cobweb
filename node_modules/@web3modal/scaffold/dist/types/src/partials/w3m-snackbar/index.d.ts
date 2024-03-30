import { LitElement } from 'lit';
export declare class W3mSnackBar extends LitElement {
    static styles: import("lit").CSSResult;
    private unsubscribe;
    private timeout?;
    private open;
    constructor();
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private onOpen;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-snackbar': W3mSnackBar;
    }
}
