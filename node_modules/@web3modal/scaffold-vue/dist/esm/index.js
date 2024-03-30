import { onUnmounted, reactive, ref } from 'vue';
let modal = undefined;
export function getWeb3Modal(web3modal) {
    if (web3modal) {
        modal = web3modal;
    }
}
export function useWeb3ModalTheme() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');
    }
    function setThemeMode(themeMode) {
        modal?.setThemeMode(themeMode);
    }
    function setThemeVariables(themeVariables) {
        modal?.setThemeVariables(themeVariables);
    }
    const themeMode = ref(modal.getThemeMode());
    const themeVariables = ref(modal.getThemeVariables());
    const unsubscribe = modal?.subscribeTheme(state => {
        themeMode.value = state.themeMode;
        themeVariables.value = state.themeVariables;
    });
    onUnmounted(() => {
        unsubscribe?.();
    });
    return {
        setThemeMode,
        setThemeVariables,
        themeMode,
        themeVariables
    };
}
export function useWeb3Modal() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" composable');
    }
    async function open(options) {
        await modal?.open(options);
    }
    async function close() {
        await modal?.close();
    }
    return reactive({
        open,
        close
    });
}
export function useWeb3ModalState() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" composable');
    }
    const initial = modal.getState();
    const open = ref(initial.open);
    const selectedNetworkId = ref(initial.selectedNetworkId);
    const unsubscribe = modal?.subscribeState(next => {
        open.value = next.open;
        selectedNetworkId.value = next.selectedNetworkId;
    });
    onUnmounted(() => {
        unsubscribe?.();
    });
    return reactive({ open, selectedNetworkId });
}
export function useWeb3ModalEvents() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalEvents" composable');
    }
    const event = reactive(modal.getEvent());
    const unsubscribe = modal?.subscribeEvents(next => {
        event.data = next.data;
        event.timestamp = next.timestamp;
    });
    onUnmounted(() => {
        unsubscribe?.();
    });
    return event;
}
//# sourceMappingURL=index.js.map