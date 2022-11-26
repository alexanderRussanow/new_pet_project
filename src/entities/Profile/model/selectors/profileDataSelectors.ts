import { StateSchema } from 'app/providers/StoreProvider';

export const profileDataSelector = ( state: StateSchema ) => state.profile.profileData;
export const profileIsLoadingSelector = ( state: StateSchema ) => state.profile.isLoading;
export const profileErrorSelector = ( state: StateSchema ) => state.profile.error;
export const profileReadonlySelector = ( state: StateSchema ) => state.profile.readonly;
export const profileFormDataSelector = ( state: StateSchema ) => state.profile.editableData;
