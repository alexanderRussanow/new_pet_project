import { CountriesEnum } from '@/entities/Counties';
import { CurrencyEnum } from '@/entities/Currency';
import { ErrorProfileEnum } from '../../consts/editableProfileCardConsts';
import { profileValidation } from './profileValifation';

const profileData = {
    name: 'John Doe',
    lastname: 'Doe',
    username: 'johndoe',
    email: 'dfs@fsdf.cz',
    phone: '123456789',
    address: '1234 Street, City, Country',
    currency: CurrencyEnum.CHF,
    country: CountriesEnum.DE,
    avatar: 'https://www.google.com',
};

describe(
    'profileValidation tests',
    () => {
        it(
            'should return empty array',
            () => {
                const result = profileValidation( profileData );
                expect( result ).toEqual( [] );
            } 
        );
        it(
            'should return array with errors',
            () => {
                const result = profileValidation( {
                    ...profileData,
                    name: '',
                    lastname: '',
                } );
                expect( result ).toEqual( [
                    ErrorProfileEnum.NAME_LENGTH_ERROR,
                    ErrorProfileEnum.LASTNAME_LENGTH_ERROR
                ] );
            } 
        );
    } 
);
