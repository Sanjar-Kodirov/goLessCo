import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../selectors/getCounterValue/getCounterValue";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue)
    console.log(counterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        console.log('decrement');
        dispatch(counterActions.decrement())
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
