var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from '@web3modal/ui';
import { W3mEmailOtpWidget } from '../../utils/w3m-email-otp-widget/index.js';
import { EventsController, RouterController } from '@web3modal/core';
let W3mUpdateEmailPrimaryOtpView = class W3mUpdateEmailPrimaryOtpView extends W3mEmailOtpWidget {
    constructor() {
        super();
        this.email = RouterController.state.data?.email;
        this.onOtpSubmit = async (otp) => {
            try {
                if (this.emailConnector) {
                    await this.emailConnector.provider.updateEmailPrimaryOtp({ otp });
                    EventsController.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_PASS' });
                    RouterController.replace('UpdateEmailSecondaryOtp', RouterController.state.data);
                }
            }
            catch (error) {
                EventsController.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_FAIL' });
                throw error;
            }
        };
        this.onStartOver = () => {
            RouterController.replace('UpdateEmailWallet', RouterController.state.data);
        };
    }
};
W3mUpdateEmailPrimaryOtpView = __decorate([
    customElement('w3m-update-email-primary-otp-view')
], W3mUpdateEmailPrimaryOtpView);
export { W3mUpdateEmailPrimaryOtpView };
//# sourceMappingURL=index.js.map