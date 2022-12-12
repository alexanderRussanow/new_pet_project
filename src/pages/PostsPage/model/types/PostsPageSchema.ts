import { EntityState } from '@reduxjs/toolkit';
import { PostListViewModeEnum, PostType } from 'entities/Post';

export interface PostsPageSchema extends EntityState<PostType> {
    isLoading?: boolean;
    error?: string;
    viewMode?: PostListViewModeEnum;
}
