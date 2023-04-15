// import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/CounterSchema';
import { counterReducer } from './model/slice/counterSlice';

export {
    Counter, CounterSchema, counterReducer,
};