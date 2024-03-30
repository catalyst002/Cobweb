var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@web3modal/ui';
import { W3mEmailOtpWidget } from '../../utils/w3m-email-otp-widget/index.js';
import { EventsController, ConnectionController, ModalController } from '@web3modal/core';
let W3mEmailVerifyOtpView = class W3mEmailVerifyOtpView extends W3mEmailOtpWidget {
    constructor() {
        super();
        this.onOtpSubmit = async (otp) => {
            try {
                if (this.emailConnector) {
                    await this.emailConnector.provider.connectOtp({ otp });
                    EventsController.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_PASS' });
                    await ConnectionController.connectExternal(this.emailConnector);
                    ModalController.close();
                    EventsController.sendEvent({
                        type: 'track',
                        event: 'CONNECT_SUCCESS',
                        properties: { method: 'email', name: this.emailConnector.name || 'Unknown' }
                    });
                }
            }
            catch (error) {
                EventsController.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_FAIL' });
                throw error;
            }
        };
        this.onOtpResend = async (email) => {
            if (this.emailConnector) {
                await this.emailConnector.provider.connectEmail({ email });
                EventsController.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' });
            }
        };
    }
};
W3mEmailVerifyOtpView = __decorate([
    customElement('w3m-email-verify-otp-view')
], W3mEmailVerifyOtpView);
export { W3mEmailVerifyOtpView };
//# sourceMappingURL=index.js.map