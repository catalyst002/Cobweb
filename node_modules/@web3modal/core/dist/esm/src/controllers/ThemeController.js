import { proxy, subscribe as sub, snapshot } from 'valtio/vanilla';
import { ConnectorController } from './ConnectorController.js';
const state = proxy({
    themeMode: 'dark',
    themeVariables: {}
});
export const ThemeController = {
    state,
    subscribe(callback) {
        return sub(state, () => callback(state));
    },
    setThemeMode(themeMode) {
        state.themeMode = themeMode;
        try {
            const emailConnector = ConnectorController.getEmailConnector();
            if (emailConnector) {
                emailConnector.provider.syncTheme({
                    themeMode: ThemeController.getSnapshot().themeMode
                });
            }
        }
        catch {
            console.info('Unable to sync theme to email connector');
        }
    },
    setThemeVariables(themeVariables) {
        state.themeVariables = { ...state.themeVariables, ...themeVariables };
        try {
            const emailConnector = ConnectorController.getEmailConnector();
            if (emailConnector) {
                emailConnector.provider.syncTheme({
                    themeVariables: ThemeController.getSnapshot().themeVariables
                });
            }
        }
        catch {
            console.info('Unable to sync theme to email connector');
        }
    },
    getSnapshot() {
        return snapshot(state);
    }
};
//# sourceMappingURL=ThemeController.js.map