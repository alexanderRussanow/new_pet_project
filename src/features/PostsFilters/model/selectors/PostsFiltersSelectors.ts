import { StateSchema } from 'app/providers/StoreProvider';

export const getPostsFilterSearchQuery = ( state: StateSchema ) => state.postsFilters?.searchQuery || '';
export const getPostsFilterOrder = ( state: StateSchema ) => state.postsFilters?.order || 'asc';
export const getPostsFilterSort = ( state: StateSchema ) => state.postsFilters?.sort || 'date';
export const getPostsFilterTag = ( state: StateSchema ) => state.postsFilters?.tag || 'All';
