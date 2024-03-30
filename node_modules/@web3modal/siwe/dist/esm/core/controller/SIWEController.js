import { subscribeKey as subKey } from 'valtio/utils';
import { proxy, ref, subscribe as sub } from 'valtio/vanilla';
import { OptionsController } from '@web3modal/core';
const state = proxy({
    status: 'uninitialized'
});
export const SIWEController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    subscribe(callback) {
        return sub(state, () => callback(state));
    },
    _getClient() {
        if (!state._client) {
            throw new Error('SIWEController client not set');
        }
        return state._client;
    },
    async getNonce() {
        const client = this._getClient();
        const nonce = await client.getNonce();
        this.setNonce(nonce);
        return nonce;
    },
    async getSession() {
        const client = this._getClient();
        const session = await client.getSession();
        if (session) {
            this.setSession(session);
            this.setStatus('success');
        }
        return session;
    },
    createMessage(args) {
        const client = this._getClient();
        const message = client.createMessage(args);
        this.setMessage(message);
        return message;
    },
    async verifyMessage(args) {
        const client = this._getClient();
        const isValid = await client.verifyMessage(args);
        return isValid;
    },
    async signIn() {
        const client = this._getClient();
        const session = await client.signIn();
        return session;
    },
    async signOut() {
        const client = this._getClient();
        await client.signOut();
        this.setStatus('ready');
        client.onSignOut?.();
    },
    onSignIn(args) {
        const client = this._getClient();
        client.onSignIn?.(args);
    },
    onSignOut() {
        const client = this._getClient();
        client.onSignOut?.();
    },
    setSIWEClient(client) {
        state._client = ref(client);
        state.status = 'ready';
        OptionsController.setIsSiweEnabled(client.options.enabled);
    },
    setNonce(nonce) {
        state.nonce = nonce;
    },
    setStatus(status) {
        state.status = status;
    },
    setMessage(message) {
        state.message = message;
    },
    setSession(session) {
        state.session = session;
    }
};
//# sourceMappingURL=SIWEController.js.map