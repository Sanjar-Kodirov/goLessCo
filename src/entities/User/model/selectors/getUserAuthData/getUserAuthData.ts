import { StateSchema } from 'entities/Counter';

export const getUserAuthData = (state: StateSchema) => state.user.authData;