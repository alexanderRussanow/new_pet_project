import { StateSchema } from '@/app/providers/StoreProvider';
import { PostsListViewModeEnum } from '@/entities/Post';

export const getPostsPageIsLoading = ( state: StateSchema ) => state.postsPage?.isLoading || false;
export const getPostsPageError = ( state: StateSchema ) => state.postsPage?.error || '';
export const getPostsPageViewMode = ( state: StateSchema ) => state.postsPage?.viewMode || PostsListViewModeEnum.GRID;
export const getPostsPagePage = ( state: StateSchema ) => state.postsPage?.page || 1;
export const getPostsPageHasMore = ( state: StateSchema ) => state.postsPage?.hasMore;
export const getPostsPageLimit = ( state: StateSchema ) => state.postsPage?.limit || 9;
export const getPostsPageHasInited = ( state: StateSchema ) => state.postsPage?.hasInited;
export const getPostsFilterSearchQuery = ( state: StateSchema ) => state.postsPage?.searchQuery || '';
export const getPostsFilterOrder = ( state: StateSchema ) => state.postsPage?.order || 'asc';
export const getPostsFilterSort = ( state: StateSchema ) => state.postsPage?.sort || 'date';
export const getPostsFilterTag = ( state: StateSchema ) => state.postsPage?.tag || 'All';




