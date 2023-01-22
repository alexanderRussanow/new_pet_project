import { CountriesEnum } from 'entities/Counties';
import { CurrencyEnum } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { ErrorProfileEnum } from '../../types/ProfileSchema';
import { updateProfileData } from './updateProfileData';

const profileData = {
    id: '123',
    name: 'John Doe',
    lastname: 'Doe',
    username: 'johndoe',
    email: 'dfs@fsdf.cz',
    phone: '123456789',
    address: '1234 Street, City, Country',
    currency: CurrencyEnum.CHF,
    country: CountriesEnum.DE,
    avatar: 'yes i have avatar',
};

describe(
    'updateProfileData tests',
    () => {
        it(
            'request should be successful',
            async () => {
                const thunk = new TestAsyncThunk(
                    updateProfileData,
                    {
                        profile: {
                            editableData: profileData,
                        },
                    } 
                );
                thunk.api.put.mockResolvedValue( Promise.resolve( { data: profileData } ) );
                const result = await thunk.callThunk();
                expect( thunk.api.put ).toHaveBeenCalled();
                expect( result.meta.requestStatus ).toEqual( 'fulfilled' );
                expect( result.payload ).toEqual( profileData );
            } 
        );
        it(
            'request should be rejected',
            async () => {
                const thunk = new TestAsyncThunk( updateProfileData );
                thunk.api.put.mockResolvedValue( Promise.resolve( { status: 500 } ) );
                const result = await thunk.callThunk();
                expect( result.meta.requestStatus ).toBe( 'rejected' );
            } 
        );
        it(
            'should return array with errors',
            async () => {
                const thunk = new TestAsyncThunk(
                    updateProfileData,
                    {
                        profile: {
                            editableData: {
                                ...profileData,
                                name: '',
                                lastname: '',
                            },
                        },
                    } 
                );
                const result = await thunk.callThunk();
                expect( result.meta.requestStatus ).toBe( 'rejected' );
                expect( result.payload ).toEqual( [
                    ErrorProfileEnum.NAME_LENGTH_ERROR,
                    ErrorProfileEnum.LASTNAME_LENGTH_ERROR
                ] );
            } 
        );
    } 
);
