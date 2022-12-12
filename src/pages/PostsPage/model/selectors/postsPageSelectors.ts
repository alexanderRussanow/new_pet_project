import { StateSchema } from 'app/providers/StoreProvider';

export const getPostsPageIsLoading = ( state: StateSchema ) => state.postsPage?.isLoading;
export const getPostsPageError = ( state: StateSchema ) => state.postsPage?.error;
export const getPostsPageViewMode = ( state: StateSchema ) => state.postsPage?.viewMode;
