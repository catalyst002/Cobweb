import type { SIWECreateMessageArgs, SIWEVerifyMessageArgs, SIWEConfig, SIWEClientMethods } from '../core/utils/TypeUtils.js';
import type { SIWEControllerClient } from '../core/controller/SIWEController.js';
export declare class Web3ModalSIWEClient {
    options: SIWEControllerClient['options'];
    methods: SIWEClientMethods;
    constructor(siweConfig: SIWEConfig);
    getNonce(): Promise<string>;
    createMessage(args: SIWECreateMessageArgs): string;
    verifyMessage(args: SIWEVerifyMessageArgs): Promise<boolean>;
    getSession(): Promise<import("../core/utils/TypeUtils.js").SIWESession>;
    signIn(): Promise<import("../core/utils/TypeUtils.js").SIWESession>;
    signOut(): Promise<boolean>;
}
