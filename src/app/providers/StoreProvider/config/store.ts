import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '../../../../entities/Counter';
import { userReducer } from '../../../../entities/User';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { useDispatch } from 'react-redux';

export function createReduxStore(initialState?: StateSchema) {

    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()