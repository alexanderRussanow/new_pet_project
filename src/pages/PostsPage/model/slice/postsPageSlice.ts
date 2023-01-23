import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { OrderEnum, PostsListViewModeEnum, PostsSortFieldEnum, PostTags, PostType } from 'entities/Post';
import { VIEW_MODE_LS_KEY } from 'shared/const/localStorage';
import { fetchPosts } from '../services/fetchPosts/fetchPosts';
import { PostsPageSchema } from '../types/PostsPageSchema';

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
        viewMode: PostsListViewModeEnum.GRID,
        page: 1,
        hasMore: true,
        hasInited: false,
        limit: 9,
        order: OrderEnum.ASC,
        sort: PostsSortFieldEnum.DATE,
        searchQuery: '',
        tag: 'All',
    } ),
    reducers: {
        setViewMode: ( state, action: PayloadAction<PostsListViewModeEnum> ) => {
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
            const view = localStorage.getItem( VIEW_MODE_LS_KEY ) as PostsListViewModeEnum;
            state.viewMode = view;
            state.limit = view === PostsListViewModeEnum.GRID ? 13 : 3;
            state.hasInited = true;
        },
        setFilters: ( state, action: PayloadAction<string> ) => {
            const splitPayload = action.payload.split( '_' );
            state.order = splitPayload[ 0 ] as OrderEnum;
            state.sort = splitPayload[ 1 ] as PostsSortFieldEnum;
        },
        setTag: ( state, action: PayloadAction<PostTags> ) => {
            state.tag = action.payload;
        },
        setSearchQuery: ( state, action: PayloadAction<string> ) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(
                fetchPosts.pending,
                ( state, action ) => {
                    state.isLoading = true;
                    state.error = undefined;
                    if ( action.meta.arg.replace ) {
                        postsPageAdapter.removeAll( state );
                    }
                } 
            )
            .addCase(
                fetchPosts.fulfilled,
                ( state, action ) => {
                    state.isLoading = false;
                    state.hasMore = action.payload.length >= state.limit;
                    if ( action.meta.arg.replace ) {
                        postsPageAdapter.setAll(
                            state,
                            action.payload 
                        );
                    } else {
                        postsPageAdapter.addMany(
                            state,
                            action.payload 
                        );
                    }
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
