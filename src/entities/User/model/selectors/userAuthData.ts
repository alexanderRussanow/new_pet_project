import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRolesEnum } from '../consts/userConsts';

export const getUserAuthData = ( state: StateSchema ) => state.user.authData;
export const getUserIsInited = ( state: StateSchema ) => state.user.isInited;
export const getUserRoles = ( state: StateSchema ) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    roles => Boolean( roles?.includes( UserRolesEnum.ADMIN ) ) 
);

export const isUserUser = createSelector(
    getUserRoles,
    roles => Boolean( roles?.includes( UserRolesEnum.USER ) ) 
);

export const isUserVisitor = createSelector(
    getUserRoles,
    roles => Boolean( roles?.includes( UserRolesEnum.VISITOR ) ) 
);
