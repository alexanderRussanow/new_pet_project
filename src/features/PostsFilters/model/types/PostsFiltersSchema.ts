import { OrderEnum, PostSortFieldEnum } from 'entities/Post';

export interface PostsFiltersSchema {
    searchQuery: string;
    order: OrderEnum;
    sort: PostSortFieldEnum;
}
