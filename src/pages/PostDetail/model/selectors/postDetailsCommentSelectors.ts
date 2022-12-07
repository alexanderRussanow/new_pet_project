import { StateSchema } from 'app/providers/StoreProvider';

export const commentsIsLoading = ( state: StateSchema ) => state.postComments?.isLoading;
export const commentsError = ( state: StateSchema ) => state.postComments?.error;
