import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe(
    'loginSlice tests',
    () => {
        it(
            'should set username',
            () => {
                const state: DeepPartial<LoginSchema> = {
                    username: '',
                };
                expect( loginReducer(
                    state as LoginSchema,
                    loginActions.setUsername( 'username' ) 
                ) ).toEqual( { username: 'username' } );
            } 
        );
        it(
            'should set password',
            () => {
                const state: DeepPartial<LoginSchema> = {
                    password: '',
                };
                expect( loginReducer(
                    state as LoginSchema,
                    loginActions.setPassword( 'password' ) 
                ) ).toEqual( { password: 'password' } );
            } 
        );
    } 
);
