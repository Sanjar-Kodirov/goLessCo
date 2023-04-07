import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'


export function createReduxStore(initialState?: StateSchema) {
    const store = configureStore<StateSchema>({
        reducer: {
            // Add reducers here

        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    return store
}
