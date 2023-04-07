import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('should return the value field from the counter slice', () => {
        const state: StateSchema = { counter: { value: 42 } };
        const result = getCounter(state);
        expect(result).toEqual({ value: 42 });
    });
});