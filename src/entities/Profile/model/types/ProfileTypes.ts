import { CountriesEnum } from './../../../Counties/model/types/CountriesEnum';
import { CurrencyEnum } from './../../../Currency/model/types/CurrencyEnum';

export interface ProfileType {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    currency: CurrencyEnum;
    zip: string;
    country: CountriesEnum;
    company: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    profileData?: ProfileType;
    editableData?: ProfileType;
    error?: string;
    validationErrors?: ErrorProfileEnum[];
}

export enum ErrorProfileEnum {
    NAME_LENGTH_ERROR = 'NAME_LENGTH_ERROR',
    LASTNAME_LENGTH_ERROR = 'LASTNAME_LENGTH_ERROR',
    EMAIL_REQUIRED_ERROR = 'EMAIL_REQUIRED_ERROR',
    USERNAME_ERROR = 'USERNAME_ERROR',
    AVATAR_ERROR = 'AVATAR_ERROR',
    NO_DATA_ERROR = 'NO_DATA_ERROR',
    VALIDATION_ERRORS = 'VALIDATION_ERRORS',
    FETCH_ERROR = 'FETCH_ERROR',
}
