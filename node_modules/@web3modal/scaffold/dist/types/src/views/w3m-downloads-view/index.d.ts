import { LitElement } from 'lit';
export declare class W3mDownloadsView extends LitElement {
    private wallet;
    render(): import("lit-html").TemplateResult<1>;
    private chromeTemplate;
    private iosTemplate;
    private androidTemplate;
    private homepageTemplate;
    private onChromeStore;
    private onAppStore;
    private onPlayStore;
    private onHomePage;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-downloads-view': W3mDownloadsView;
    }
}
