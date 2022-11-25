import { StateSchema } from 'app/providers/StoreProvider';

export const profileDataSelector = ( state: StateSchema ) => state.profile.profileData;
export const profileIsLoadingSelector = ( state: StateSchema ) => state.profile.isLoading;
export const profileErrorSelector = ( state: StateSchema ) => state.profile.error;
