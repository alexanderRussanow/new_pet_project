import { OrderEnum, PostsSortFieldEnum, PostTags } from 'entities/Post';

export interface PostsFiltersSchema {
    searchQuery: string;
    order: OrderEnum;
    sort: PostsSortFieldEnum;
    tag: PostTags;
}
