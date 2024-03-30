import type { RouterControllerState } from './RouterController.js';
export interface ModalControllerState {
    loading: boolean;
    open: boolean;
}
export interface ModalControllerArguments {
    open: {
        view?: RouterControllerState['view'];
    };
}
export declare const ModalController: {
    state: ModalControllerState;
    subscribe(callback: (newState: ModalControllerState) => void): () => void;
    subscribeKey<K extends keyof ModalControllerState>(key: K, callback: (value: ModalControllerState[K]) => void): () => void;
    open(options?: ModalControllerArguments['open']): Promise<void>;
    close(): void;
    setLoading(loading: ModalControllerState['loading']): void;
};
