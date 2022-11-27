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
}
