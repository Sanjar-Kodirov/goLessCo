import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../model/types/CounterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => {
        return counter.value;
    },
);