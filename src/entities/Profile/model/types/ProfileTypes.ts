import { CountriesEnum } from './../../../Counties/model/types/CountriesEnum';
import { CurrencyEnum } from './../../../Currency/model/types/CurrencyEnum';

export interface ProfileType {
    id?: string;
    name?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    currency?: CurrencyEnum;
    zip?: string;
    country?: CountriesEnum;
    company?: string;
    username?: string;
    avatar?: string;
}
