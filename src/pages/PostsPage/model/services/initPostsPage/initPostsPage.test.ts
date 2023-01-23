import { PostsListViewModeEnum } from 'entities/Post';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncthunk/TestAsyncThunk';
import { fetchPosts } from '../fetchPosts/fetchPosts';
import { initPostsPage } from './initPostsPage';

jest.mock( '../fetchPosts/fetchPosts' );

describe(
    'initPostsPage',
    () => {
        it(
            'should init the posts page',
            async () => {
                const searchParams = new URLSearchParams( window.location.search );
                const thunk = new TestAsyncThunk(
                    initPostsPage,
                    {
                        postsPage: {
                            page: 1,
                            ids: [],
                            entities: {},
                            hasMore: true,
                            isLoading: false,
                            error: undefined,
                            hasInited: false,
                            viewMode: PostsListViewModeEnum.GRID,
                        },
                    } 
                );
                await thunk.callThunk( searchParams );
                expect( thunk.dispatch ).toBeCalledTimes( 6 );
                expect( fetchPosts ).toBeCalledWith( { } );
            } 
        );
        it(
            "async thunk shouldn't call fetchPosts if the posts page has already been inited",
            async () => {
                const searchParams = new URLSearchParams( window.location.search );
                const thunk = new TestAsyncThunk(
                    initPostsPage,
                    {
                        postsPage: {
                            page: 1,
                            ids: [],
                            entities: {},
                            hasMore: false,
                            isLoading: false,
                            error: undefined,
                            limit: 6,
                            hasInited: true,
                        },
                    } 
                );
                await thunk.callThunk( searchParams );
                expect( thunk.dispatch ).toBeCalledTimes( 2 );
                expect( fetchPosts ).not.toBeCalled();
            } 
        );
    } 
);
