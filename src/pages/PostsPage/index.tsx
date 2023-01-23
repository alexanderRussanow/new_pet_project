export { PostsPageLazy as PostsPage } from './ui/PostPage/PostsPage.lazy';
export type { PostsPageSchema } from './model/types/PostsPageSchema';
export * from './model/slice/postsPageSlice';
export * from './model/selectors/postsPageSelectors';
export * from './model/services/fetchNextPostsPage/fetchNextPostsPage';
export * from './model/services/fetchPosts/fetchPosts';
export * from './model/services/initPostsPage/initPostsPage';
