import { CountriesEnum } from 'entities/Counties';
import { CurrencyEnum } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const profileData = {
    name: 'John Doe',
    lastname: 'Doe',
    username: 'johndoe',
    email: 'dfs@fsdf.cz',
    phone: '123456789',
    address: '1234 Street, City, Country',
    currency: CurrencyEnum.CHF,
    country: CountriesEnum.DE,
};

describe(
    'fetchProfileData tests',
    () => {
        it(
            'request should be successful',
            async () => {
                const thunk = new TestAsyncThunk( fetchProfileData );
                thunk.api.get.mockResolvedValue( Promise.resolve( { data: profileData } ) );
                const result = await thunk.callThunk( '1' );
                expect( thunk.api.get ).toHaveBeenCalled();
                expect( result.meta.requestStatus ).toEqual( 'fulfilled' );
                expect( result.payload ).toEqual( profileData );
            } 
        );
        it(
            'request should be rejected',
            async () => {
                const thunk = new TestAsyncThunk( fetchProfileData );
                thunk.api.get.mockResolvedValue( Promise.resolve( { status: 500 } ) );
                const result = await thunk.callThunk( '1' );
                expect( result.meta.requestStatus ).toBe( 'rejected' );
            } 
        );
    } 
);
