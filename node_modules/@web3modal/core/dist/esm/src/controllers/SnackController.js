import { subscribeKey as subKey } from 'valtio/utils';
import { proxy } from 'valtio/vanilla';
import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
const state = proxy({
    message: '',
    variant: 'success',
    open: false
});
export const SnackController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    showSuccess(message) {
        state.message = message;
        state.variant = 'success';
        state.open = true;
    },
    showError(message) {
        const errorMessage = CoreHelperUtil.parseError(message);
        state.message = errorMessage;
        state.variant = 'error';
        state.open = true;
    },
    hide() {
        state.open = false;
    }
};
//# sourceMappingURL=SnackController.js.map