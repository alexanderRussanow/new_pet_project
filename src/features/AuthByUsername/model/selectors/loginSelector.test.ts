import { StateSchema } from 'app/providers/StoreProvider';
import { loginErrorSelector, loginIsLoadingSelector, loginPasswordSelector, loginUsernameSelector } from './loginSelectors';

describe(
    'loginSelectors tests',
    () => {
        it(
            'should return the username',
            () => {
                const username = 'test';
                const state: DeepPartial<StateSchema> = {
                    login: {
                        username,
                    },
                };
                expect( loginUsernameSelector( state as StateSchema ) ).toEqual( username );
            } 
        );
        it(
            'should return an empty string',
            () => {
                const state: DeepPartial<StateSchema> = {
                    login: undefined,
                };
                expect( loginUsernameSelector( state as StateSchema ) ).toEqual( '' );
            } 
        );
        it(
            'should return password',
            () => {
                const password = 'test';
                const state: DeepPartial<StateSchema> = {
                    login: {
                        password,
                    },
                };
                expect( loginPasswordSelector( state as StateSchema ) ).toEqual( password );
            } 
        );
        it(
            'should return an empty string',
            () => {
                const state: DeepPartial<StateSchema> = {
                    login: undefined,
                };
                expect( loginPasswordSelector( state as StateSchema ) ).toEqual( '' );
            } 
        );
        it(
            'should return the isLoading',
            () => {
                const isLoading = true;
                const state: DeepPartial<StateSchema> = {
                    login: {
                        isLoading,
                    },
                };
                expect( loginIsLoadingSelector( state as StateSchema ) ).toEqual( isLoading );
            } 
        );
        it(
            'should return isLoading false',
            () => {
                const state: DeepPartial<StateSchema> = {
                    login: undefined,
                };
                expect( loginIsLoadingSelector( state as StateSchema ) ).toEqual( false );
            } 
        );
        it(
            'should return the error',
            () => {
                const error = 'error';
                const state: DeepPartial<StateSchema> = {
                    login: {
                        error,
                    },
                };
                expect( loginErrorSelector( state as StateSchema ) ).toEqual( error );
            } 
        );
        it(
            'should return undefined',
            () => {
                const state: DeepPartial<StateSchema> = {
                    login: undefined,
                };
                expect( loginErrorSelector( state as StateSchema ) ).toEqual( undefined );
            } 
        );
    } 
);
