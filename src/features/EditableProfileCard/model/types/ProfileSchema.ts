import { ProfileType } from "entities/Profile";
import { ErrorProfileEnum } from "../consts/editableProfileCardConsts";

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    profileData?: ProfileType;
    editableData?: ProfileType;
    error?: string;
    validationErrors?: ErrorProfileEnum[];
}

