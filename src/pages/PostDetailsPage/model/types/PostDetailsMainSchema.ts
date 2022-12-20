import { PostDetailsCommentSchema } from "./PostDetailsCommentSchema";
import { PostDetailsRecommendationSchema } from "./PostDetailsRecommendationSchema";

export interface PostDetailsMainSchema {
    comments: PostDetailsCommentSchema;
    recommendations: PostDetailsRecommendationSchema;
}
