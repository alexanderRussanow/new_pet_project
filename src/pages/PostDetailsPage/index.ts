export { PostDetailPageLazy as PostDetailPage } from './ui/PostDetailsPage/PostDetailPage.lazy';
export type { PostDetailsCommentSchema, PostDetailsMainSchema, PostDetailsRecommendationSchema } from './model/types/postDetailsPageTypes';
export * from './model/slice/postDetailsCommentsSlice';
export * from './model/slice/postDetailsRecommendationSlice';
export * from './model/slice/postDetailsMainSlice';
export * from './model/selectors/postDetailsCommentSelectors';
