import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post';
import { fetchPostRecommendations } from '../services/fetchRecommendations';
import { PostDetailsRecommendationSchema } from '../types/PostDetailsRecommendationSchema';

const recommendationsAdapter = createEntityAdapter<PostType>( {
    selectId: post => post.id,
} );

export const getPostRecommendations = recommendationsAdapter.getSelectors<StateSchema>( state => state.postRecommendations || recommendationsAdapter.getInitialState() );

const postDetailsRecommendationSlice = createSlice( {
    name: 'postDetailsRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState<PostDetailsRecommendationSchema>( {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    } ),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                fetchPostRecommendations.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                fetchPostRecommendations.fulfilled,
                ( state, action: PayloadAction<PostType[]> ) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(
                        state,
                        action.payload 
                    );
                } 
            )
            .addCase(
                fetchPostRecommendations.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: postRecommendationsActions } = postDetailsRecommendationSlice;
export const { reducer: postRecommendationsReducer } = postDetailsRecommendationSlice;
