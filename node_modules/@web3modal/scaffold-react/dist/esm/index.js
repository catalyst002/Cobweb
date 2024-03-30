import { useEffect, useState } from 'react';
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
    const [themeMode, setInternalThemeMode] = useState(modal.getThemeMode());
    const [themeVariables, setInternalThemeVariables] = useState(modal.getThemeVariables());
    useEffect(() => {
        const unsubscribe = modal?.subscribeTheme(state => {
            setInternalThemeMode(state.themeMode);
            setInternalThemeVariables(state.themeVariables);
        });
        return () => {
            unsubscribe?.();
        };
    }, []);
    return {
        themeMode,
        themeVariables,
        setThemeMode,
        setThemeVariables
    };
}
export function useWeb3Modal() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
    }
    async function open(options) {
        await modal?.open(options);
    }
    async function close() {
        await modal?.close();
    }
    return { open, close };
}
export function useWeb3ModalState() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
    }
    const [state, setState] = useState(modal.getState());
    useEffect(() => {
        const unsubscribe = modal?.subscribeState(newState => {
            setState({ ...newState });
        });
        return () => {
            unsubscribe?.();
        };
    }, []);
    return state;
}
export function useWeb3ModalEvents() {
    if (!modal) {
        throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
    }
    const [event, setEvents] = useState(modal.getEvent());
    useEffect(() => {
        const unsubscribe = modal?.subscribeEvents(newEvent => {
            setEvents({ ...newEvent });
        });
        return () => {
            unsubscribe?.();
        };
    }, []);
    return event;
}
//# sourceMappingURL=index.js.map