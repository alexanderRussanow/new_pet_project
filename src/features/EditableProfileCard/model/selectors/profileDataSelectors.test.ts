import { StateSchema } from '@/app/providers/StoreProvider';
import { CountriesEnum } from '@/entities/Counties';
import { CurrencyEnum } from '@/entities/Currency';
import { getProfileDataSelector, getProfileErrorSelector, getProfileIsLoadingSelector } from './profileDataSelectors';

describe(
    'Profile Selectors tests',
    () => {
        it(
            'should return the profile data',
            () => {
                const profile = {
                    name: 'John Doe',
                    lastname: 'Doe',
                    username: 'johndoe',
                    email: 'dfs@fsdf.cz',
                    phone: '123456789',
                    address: '1234 Street, City, Country',
                    currency: CurrencyEnum.CHF,
                    country: CountriesEnum.DE,
                };
                const state: DeepPartial<StateSchema> = {
                    profile: {
                        profileData: profile,
                    },
                };
                expect( getProfileDataSelector( state as StateSchema ) ).toEqual( profile );
            } 
        );
        it(
            'should return undefined if no profile data',
            () => {
                const state: DeepPartial<StateSchema> = {
                    profile: {
                        profileData: undefined,
                    },
                };
                expect( getProfileDataSelector( state as StateSchema ) ).toBeUndefined();
            } 
        );
        it(
            'should be isLoading true',
            () => {
                const state: DeepPartial<StateSchema> = {
                    profile: {
                        isLoading: true,
                    },
                };
                expect( getProfileIsLoadingSelector( state as StateSchema ) ).toBeTruthy();
            } 
        );
        it(
            'should return error',
            () => {
                const state: DeepPartial<StateSchema> = {
                    profile: {
                        error: 'Error',
                    },
                };
                expect( getProfileErrorSelector( state as StateSchema ) ).toBe( 'Error' );
            } 
        );
    } 
);
