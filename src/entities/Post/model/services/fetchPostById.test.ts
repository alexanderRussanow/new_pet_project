import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { fetchPostById } from './fetchPostById';

describe(
    'fetch post by id',
    () => {
        it(
            'should return the post data',
            async () => {
                const thunk = new TestAsyncThunk( fetchPostById );
                thunk.api.get.mockResolvedValue( Promise.resolve( { data: { id: '1' } } ) );
                const result = await thunk.callThunk( '1' );
                expect( thunk.api.get ).toHaveBeenCalled();
                expect( result.meta.requestStatus ).toEqual( 'fulfilled' );
                expect( result.payload ).toEqual( { id: '1' } );
            } 
        );
        it(
            'should be rejected',
            async () => {
                const thunk = new TestAsyncThunk( fetchPostById );
                thunk.api.get.mockResolvedValue( Promise.resolve( { status: 500 } ) );
                const result = await thunk.callThunk( '1' );
                expect( result.meta.requestStatus ).toBe( 'rejected' );
            } 
        );
    } 
);
