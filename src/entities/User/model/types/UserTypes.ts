export enum UserRolesEnum {
    ADMIN = 'ADMIN',
    USER = 'USER',
    VISITOR = 'VISITOR',
}

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
