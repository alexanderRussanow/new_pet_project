import { PostDetailsMainSchema } from './../types/PostDetailsMainSchema';
import { combineReducers } from '@reduxjs/toolkit';
import { postCommentsReducer } from './postDetailsCommentsSlice';
import { postRecommendationsReducer } from './postDetailsRecommendationSlice';

export const postDetailsMainReducer = combineReducers<PostDetailsMainSchema>( {
    comments: postCommentsReducer,
    recommendations: postRecommendationsReducer,
} );
