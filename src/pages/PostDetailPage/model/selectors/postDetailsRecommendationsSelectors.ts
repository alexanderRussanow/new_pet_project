import { StateSchema } from 'app/providers/StoreProvider';

export const getRecommendationsIsLoading = ( state: StateSchema ) => state.postRecommendations?.isLoading;
export const getRecommendationsError = ( state: StateSchema ) => state.postRecommendations?.error;
