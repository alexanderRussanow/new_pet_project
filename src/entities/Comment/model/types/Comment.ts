import { UserType } from 'entities/User';

export interface CommentType {
    id: string;
    user: UserType;
    text: string;
}
