import { describe, expect, it } from 'vitest';
import { ModalController } from '../../index.js';
describe('ModalController', () => {
    it('should have valid default state', () => {
        expect(ModalController.state.open).toEqual(false);
    });
    it.skip('should update state correctly on open()', () => {
        ModalController.open();
        expect(ModalController.state.open).toEqual(true);
    });
    it('should update state correctly on close()', () => {
        ModalController.close();
        expect(ModalController.state.open).toEqual(false);
    });
});
//# sourceMappingURL=ModalController.test.js.map