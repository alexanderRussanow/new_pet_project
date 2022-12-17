import { OrderEnum, PostSortFieldEnum, PostTags } from 'entities/Post';

export interface PostsFiltersSchema {
    searchQuery: string;
    order: OrderEnum;
    sort: PostSortFieldEnum;
    tag: PostTags;
}
