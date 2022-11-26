import { Countries, Currency } from '../../../../shared/const/common';

export interface ProfileType {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    currency: Currency;
    zip: string;
    country: Countries;
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
