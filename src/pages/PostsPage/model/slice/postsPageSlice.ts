import { fetchPosts } from '../services/fetchPosts/fetchPosts';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post/model/types/PostType';
import { PostsPageSchema } from '../types/PostsPageSchema';
import { PostListViewModeEnum } from './../../../../entities/Post/model/types/PostType';
import { VIEW_MODE_LS_KEY } from 'shared/const/localStorage';

const postsPageAdapter = createEntityAdapter<PostType>( {
    selectId: post => post.id,
} );

export const getPostsPagePosts = postsPageAdapter.getSelectors<StateSchema>( state => state.postsPage || postsPageAdapter.getInitialState() );

const postsPageSlice = createSlice( {
    name: 'postsPageSlice',
    initialState: postsPageAdapter.getInitialState<PostsPageSchema>( {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        viewMode: PostListViewModeEnum.GRID,
        page: 1,
        hasMore: true,
        hasInited: false,
    } ),
    reducers: {
        setViewMode: ( state, action: PayloadAction<PostListViewModeEnum> ) => {
            state.viewMode = action.payload;
            localStorage.setItem(
                VIEW_MODE_LS_KEY,
                action.payload 
            );
        },
        setPageNumber: ( state, action: PayloadAction<number> ) => {
            state.page = action.payload;
        },
        initState: state => {
            const view = localStorage.getItem( VIEW_MODE_LS_KEY ) as PostListViewModeEnum;
            state.viewMode = view;
            state.limit = view === PostListViewModeEnum.GRID ? 9 : 3;
            state.hasInited = true;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(
                fetchPosts.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                fetchPosts.fulfilled,
                ( state, action: PayloadAction<PostType[]> ) => {
                    state.isLoading = false;
                    postsPageAdapter.addMany(
                        state,
                        action.payload 
                    );
                    state.hasMore = action.payload.length > 0;
                } 
            )
            .addCase(
                fetchPosts.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: postsPageActions } = postsPageSlice;
export const { reducer: postsPageReducer } = postsPageSlice;
