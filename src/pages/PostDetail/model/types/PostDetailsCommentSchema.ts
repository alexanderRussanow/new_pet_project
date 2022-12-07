import { CommentType } from 'entities/Comment';

export interface PostDetailsCommentSchema {
    isLoading?: boolean;
    data?: CommentType[];
    error?: string;
}
