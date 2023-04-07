import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(getCounterValue)
    console.log(counter)
    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        console.log('decrement');
        dispatch(counterActions.decrement())
    };
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
        </div>
    );
};
