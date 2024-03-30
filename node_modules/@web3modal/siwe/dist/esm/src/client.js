import { AccountController, NetworkController, ConnectionController, RouterUtil } from '@web3modal/core';
import { ConstantsUtil } from '../core/utils/ConstantsUtil.js';
import { HelpersUtil } from '@web3modal/scaffold-utils';
export class Web3ModalSIWEClient {
    constructor(siweConfig) {
        const { enabled = true, nonceRefetchIntervalMs = ConstantsUtil.FIVE_MINUTES_IN_MS, sessionRefetchIntervalMs = ConstantsUtil.FIVE_MINUTES_IN_MS, signOutOnAccountChange = true, signOutOnDisconnect = true, signOutOnNetworkChange = true, ...siweConfigMethods } = siweConfig;
        this.options = {
            enabled,
            nonceRefetchIntervalMs,
            sessionRefetchIntervalMs,
            signOutOnDisconnect,
            signOutOnAccountChange,
            signOutOnNetworkChange
        };
        this.methods = siweConfigMethods;
    }
    async getNonce() {
        const nonce = await this.methods.getNonce();
        if (!nonce) {
            throw new Error('siweControllerClient:getNonce - nonce is undefined');
        }
        return nonce;
    }
    createMessage(args) {
        const message = this.methods.createMessage(args);
        if (!message) {
            throw new Error('siweControllerClient:createMessage - message is undefined');
        }
        return message;
    }
    async verifyMessage(args) {
        const isValid = await this.methods.verifyMessage(args);
        return isValid;
    }
    async getSession() {
        const session = await this.methods.getSession();
        if (!session) {
            throw new Error('siweControllerClient:getSession - session is undefined');
        }
        return session;
    }
    async signIn() {
        const nonce = await this.methods.getNonce();
        const { address } = AccountController.state;
        if (!address) {
            throw new Error('An address is required to create a SIWE message.');
        }
        const chainId = HelpersUtil.caipNetworkIdToNumber(NetworkController.state.caipNetwork?.id);
        if (!chainId) {
            throw new Error('A chainId is required to create a SIWE message.');
        }
        const message = this.methods.createMessage({ address, nonce, chainId });
        const signature = await ConnectionController.signMessage(message);
        const isValid = await this.methods.verifyMessage({ message, signature });
        if (!isValid) {
            throw new Error('Error verifying SIWE signature');
        }
        const session = await this.methods.getSession();
        if (!session) {
            throw new Error('Error verifying SIWE signature');
        }
        if (this.methods.onSignIn) {
            this.methods.onSignIn(session);
        }
        RouterUtil.navigateAfterNetworkSwitch();
        return session;
    }
    async signOut() {
        return this.methods.signOut();
    }
}
//# sourceMappingURL=client.js.map