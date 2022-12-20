import { EntityState } from '@reduxjs/toolkit';
import { PostType } from 'entities/Post';

export interface PostDetailsRecommendationSchema extends EntityState<PostType> {
    isLoading?: boolean;
    error?: string;
}
