import { PostListViewModeEnum } from 'entities/Post';
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
                            viewMode: PostListViewModeEnum.GRID,
                        },
                    } 
                );
                await thunk.callThunk();
                expect( thunk.dispatch ).toBeCalledTimes( 4 );
                expect( fetchPosts ).toBeCalledWith( { page: 1 } );
            } 
        );
        it(
            "async thunk shouldn't call fetchPosts if the posts page has already been inited",
            async () => {
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
                await thunk.callThunk();
                expect( thunk.dispatch ).toBeCalledTimes( 2 );
                expect( fetchPosts ).not.toBeCalled();
            } 
        );
    } 
);
