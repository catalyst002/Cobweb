import type { CaipNetworkId } from '../utils/TypeUtil.js';
export interface PublicStateControllerState {
    open: boolean;
    selectedNetworkId?: CaipNetworkId;
}
export declare const PublicStateController: {
    state: PublicStateControllerState;
    subscribe(callback: (newState: PublicStateControllerState) => void): () => void;
    set(newState: Partial<PublicStateControllerState>): void;
};
