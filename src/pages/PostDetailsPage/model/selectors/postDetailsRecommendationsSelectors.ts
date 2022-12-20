import { StateSchema } from 'app/providers/StoreProvider';

export const getRecommendationsIsLoading = ( state: StateSchema ) => state.postsDetails?.recommendations?.isLoading;
export const getRecommendationsError = ( state: StateSchema ) => state.postsDetails?.recommendations?.error;
