import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { CounterSchema } from "entities/Counter";
import { counterActions } from "entities/Counter/model/slice/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: StateSchema) => state.counter.value)
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
