import { Web3ModalSIWEClient } from '../src/client.js';
export { SIWEController } from '../core/controller/SIWEController.js';
export function createSIWEConfig(siweConfig) {
    return new Web3ModalSIWEClient(siweConfig);
}
export * from '../scaffold/partials/w3m-connecting-siwe/index.js';
export * from '../scaffold/views/w3m-connecting-siwe-view/index.js';
//# sourceMappingURL=index.js.map