import { StateSchema } from 'app/providers/StoreProvider';

export const loginSelector = ( state: StateSchema ) => state.login;
export const loginIsLoadingSelector = ( state: StateSchema ) => state.login?.isLoading || false;
export const loginErrorSelector = ( state: StateSchema ) => state.login?.error;
export const loginUsernameSelector = ( state: StateSchema ) => state.login?.username || '';
export const loginPasswordSelector = ( state: StateSchema ) => state.login?.password || '';
