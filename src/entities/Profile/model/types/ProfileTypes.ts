import { CountriesEnum } from '../../../Counties/model/consts/CountriesEnum';
import { CurrencyEnum } from '../../../Currency/model/consts/CurrencyEnum';

export interface ProfileType {
    id?: string;
    name?: string;
    lastname?: string;
    username?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    zip?: string;
    currency?: CurrencyEnum;
    country?: CountriesEnum;
    company?: string;
    avatar?: string;
}
