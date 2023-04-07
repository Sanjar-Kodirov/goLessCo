import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/CounterSchema';
import { counterReducer } from './model/slice/CounterSlice';

export {
    Counter, CounterSchema, counterReducer, StateSchema, 
};