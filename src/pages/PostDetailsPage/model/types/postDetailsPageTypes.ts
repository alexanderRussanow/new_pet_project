import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';
import { PostType } from 'entities/Post';

export interface PostDetailsCommentSchema extends EntityState<CommentType> {
    isLoading?: boolean;
    error?: string;
}

export interface PostDetailsRecommendationSchema extends EntityState<PostType> {
    isLoading?: boolean;
    error?: string;
}

export interface PostDetailsMainSchema {
    comments: PostDetailsCommentSchema;
    recommendations: PostDetailsRecommendationSchema;
}
