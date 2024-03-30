export interface SnackControllerState {
    message: string;
    variant: 'error' | 'success';
    open: boolean;
}
export declare const SnackController: {
    state: SnackControllerState;
    subscribeKey<K extends keyof SnackControllerState>(key: K, callback: (value: SnackControllerState[K]) => void): () => void;
    showSuccess(message: SnackControllerState['message']): void;
    showError(message: unknown): void;
    hide(): void;
};
