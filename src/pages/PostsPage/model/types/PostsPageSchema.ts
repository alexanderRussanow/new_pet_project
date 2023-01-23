import { EntityState } from '@reduxjs/toolkit';
import { PostsListViewModeEnum, PostType } from 'entities/Post';

export interface PostsPageSchema extends EntityState<PostType> {
    isLoading?: boolean;
    error?: string;
    viewMode?: PostsListViewModeEnum;
    // pagination
    page: number;
    hasMore: boolean;
    limit: number;
    hasInited: boolean;
}
