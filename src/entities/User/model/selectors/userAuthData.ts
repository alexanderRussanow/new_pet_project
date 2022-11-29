import { StateSchema } from "app/providers/StoreProvider";

export const userAuthData = ( state: StateSchema ) => state.user.authData;
export const userIsInited = ( state: StateSchema ) => state.user.isInited;
