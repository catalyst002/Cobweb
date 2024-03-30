import { subscribeKey as subKey } from 'valtio/utils';
import { proxy } from 'valtio/vanilla';
const state = proxy({
    view: 'Connect',
    history: ['Connect']
});
export const RouterController = {
    state,
    subscribeKey(key, callback) {
        return subKey(state, key, callback);
    },
    push(view, data) {
        if (view !== state.view) {
            state.view = view;
            state.history.push(view);
            state.data = data;
        }
    },
    reset(view) {
        state.view = view;
        state.history = [view];
    },
    replace(view, data) {
        if (state.history.length > 1 && state.history.at(-1) !== view) {
            state.view = view;
            state.history[state.history.length - 1] = view;
            state.data = data;
        }
    },
    goBack() {
        if (state.history.length > 1) {
            state.history.pop();
            const [last] = state.history.slice(-1);
            if (last) {
                state.view = last;
            }
        }
    },
    goBackToIndex(historyIndex) {
        if (state.history.length > 1) {
            state.history = state.history.slice(0, historyIndex + 1);
            const [last] = state.history.slice(-1);
            if (last) {
                state.view = last;
            }
        }
    }
};
//# sourceMappingURL=RouterController.js.map