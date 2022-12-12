import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentsIsLoading = ( state: StateSchema ) => state.postComments?.isLoading;
export const getCommentsError = ( state: StateSchema ) => state.postComments?.error;
