import { EntityState } from '@reduxjs/toolkit';
import { OrderEnum, PostsListViewModeEnum, PostsSortFieldEnum, PostTags, PostType } from '@/entities/Post';

export interface PostsPageSchema extends EntityState<PostType> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    hasMore: boolean;
    limit: number;
    // filters
    viewMode?: PostsListViewModeEnum;
    searchQuery: string;
    order: OrderEnum;
    sort: PostsSortFieldEnum;
    tag: PostTags;

    hasInited: boolean;
}
