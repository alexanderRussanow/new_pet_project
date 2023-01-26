import { StateSchema } from '@/app/providers/StoreProvider';

export const getCommentsIsLoading = ( state: StateSchema ) => state.postsDetails?.comments.isLoading;
export const getCommentsError = ( state: StateSchema ) => state.postsDetails?.comments.error;
