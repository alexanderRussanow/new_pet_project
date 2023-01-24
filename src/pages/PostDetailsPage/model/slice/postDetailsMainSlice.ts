import { combineReducers } from '@reduxjs/toolkit';
import { PostDetailsMainSchema } from '../types/postDetailsPageTypes';
import { postCommentsReducer } from './postDetailsCommentsSlice';
import { postRecommendationsReducer } from './postDetailsRecommendationSlice';

export const postDetailsMainReducer = combineReducers<PostDetailsMainSchema>( {
    comments: postCommentsReducer,
    recommendations: postRecommendationsReducer,
} );
