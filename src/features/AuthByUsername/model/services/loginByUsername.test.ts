import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe(
    'loginByusername tests',
    () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

        // beforeEach( () => {
        //     dispatch = jest.fn();
        //     getState = jest.fn();
        // } );

        it(
            'request should be successful',
            async () => {
                // const action = loginByUsername( { username: 'username', password: 'password' } );
                // const result = await action(
                //     dispatch,
                //     getState,
                //     undefined
                // );

                const thunk = new TestAsyncThunk( loginByUsername );
                thunk.api.post.mockResolvedValue( Promise.resolve( { data: { username: 'username', id: '1' } } ) );
                const result = await thunk.callThunk( { username: 'username', password: 'password' } );

                expect( thunk.api.post ).toHaveBeenCalled();
                expect( result.meta.requestStatus ).toEqual( 'fulfilled' );
                expect( thunk.dispatch ).toHaveBeenCalledWith( userActions.setAuthUser( { username: 'username', id: '1' } ) );
                expect( thunk.dispatch ).toHaveBeenCalledTimes( 3 );
                expect( result.payload ).toEqual( { username: 'username', id: '1' } );
            } 
        );
        it(
            'request should be rejected',
            async () => {
                // const action = loginByUsername( { username: 'username', password: 'password' } );
                // const result = await action(
                //     dispatch,
                //     getState,
                //     undefined
                // );

                const thunk = new TestAsyncThunk( loginByUsername );
                thunk.api.post.mockResolvedValue( Promise.resolve( { status: 403 } ) );
                const result = await thunk.callThunk( { username: 'username', password: 'password' } );

                expect( thunk.api.post ).toHaveBeenCalled();
                expect( result.meta.requestStatus ).toEqual( 'rejected' );
                expect( thunk.dispatch ).toHaveBeenCalledTimes( 2 );
                expect( result.payload ).toEqual( 'Wrong email or password' );
            } 
        );
    } 
);
