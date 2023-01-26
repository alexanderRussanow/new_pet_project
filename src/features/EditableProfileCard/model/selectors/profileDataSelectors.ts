import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileDataSelector = ( state: StateSchema ) => state.profile?.profileData;
export const getProfileIsLoadingSelector = ( state: StateSchema ) => state.profile?.isLoading;
export const getProfileErrorSelector = ( state: StateSchema ) => state.profile?.error;
export const getProfileReadonlySelector = ( state: StateSchema ) => state.profile?.readonly;
export const getProfileFormDataSelector = ( state: StateSchema ) => state.profile?.editableData;
export const getProfileValidationErrorsSelector = ( state: StateSchema ) => state.profile?.validationErrors;
