import { fetchNextPostsPage } from './fetchNextPostsPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { fetchPosts } from '../fetchPosts/fetchPosts';

jest.mock( '../fetchPosts/fetchPosts' );

describe(
    'fetchNextPostsPage',
    () => {
        it(
            'should load the next page of posts',
            async () => {
                const thunk = new TestAsyncThunk(
                    fetchNextPostsPage,
                    {
                        postsPage: {
                            page: 1,
                            ids: [],
                            entities: {},
                            hasMore: true,
                            isLoading: false,
                            error: undefined,
                            limit: 6,
                        },
                    } 
                );
                await thunk.callThunk();
                expect( thunk.dispatch ).toBeCalledTimes( 4 );
                expect( fetchPosts ).toBeCalledWith( { page: 2 } );
            } 
        );
        it(
            "async thunk shouldn't dispatch anything if there is no more posts to load",
            async () => {
                const thunk = new TestAsyncThunk(
                    fetchNextPostsPage,
                    {
                        postsPage: {
                            page: 1,
                            ids: [],
                            entities: {},
                            hasMore: false,
                            isLoading: false,
                            error: undefined,
                            limit: 6,
                        },
                    } 
                );
                await thunk.callThunk();
                expect( thunk.dispatch ).toBeCalledTimes( 2 );
                expect( fetchPosts ).not.toBeCalled();
            } 
        );
        it(
            "async thunk shouldn't dispatch anything if there is already loading posts",
            async () => {
                const thunk = new TestAsyncThunk(
                    fetchNextPostsPage,
                    {
                        postsPage: {
                            page: 1,
                            ids: [],
                            entities: {},
                            hasMore: true,
                            isLoading: true,
                            error: undefined,
                            limit: 6,
                        },
                    } 
                );
                await thunk.callThunk();
                expect( thunk.dispatch ).toBeCalledTimes( 2 );
                expect( fetchPosts ).not.toBeCalled();
            } 
        );
    } 
);
