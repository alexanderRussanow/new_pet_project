import { UserRolesEnum } from "../consts/userConsts";

export interface UserType {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRolesEnum[];
}

export interface UserSchema {
    authData?: UserType;
    isInited: boolean;
}
