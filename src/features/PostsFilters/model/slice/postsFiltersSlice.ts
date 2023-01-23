import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderEnum, PostsSortFieldEnum, PostTags } from 'entities/Post';
import { PostsFiltersSchema } from '../types/PostsFiltersSchema';

const initialState: PostsFiltersSchema = {
    order: OrderEnum.ASC,
    sort: PostsSortFieldEnum.DATE,
    searchQuery: '',
    tag: 'All',
};

const postsFiltersSlice = createSlice( {
    name: 'postsFiltersSlice',
    initialState,
    reducers: {
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
} );

export const { actions: postsFiltersActions } = postsFiltersSlice;
export const { reducer: postsFiltersReducer } = postsFiltersSlice;
