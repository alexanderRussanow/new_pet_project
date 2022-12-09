import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginSelector = ( state: StateSchema ) => state.login;
export const getLoginIsLoadingSelector = ( state: StateSchema ) => state.login?.isLoading || false;
export const getLoginErrorSelector = ( state: StateSchema ) => state.login?.error;
export const getLoginUsernameSelector = ( state: StateSchema ) => state.login?.username || '';
export const getLoginPasswordSelector = ( state: StateSchema ) => state.login?.password || '';
