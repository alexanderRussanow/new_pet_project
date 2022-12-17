import { UserType } from 'entities/User';
export type PostTags = 'All' | 'IT' | 'Web' | 'Design' | 'Business' | 'Other';

export enum PostContentTypeEnum {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    EMBED = 'EMBED',
    LINK = 'LINK',
    QUOTE = 'QUOTE',
    FILE = 'FILE',
}

export interface ContentText {
    id: string;
    type: PostContentTypeEnum.TEXT;
    title?: string;
    text?: string[];
}

export interface ContentCode {
    id: string;
    type: PostContentTypeEnum.CODE;
    code?: string;
}

export interface ContentImage {
    id: string;
    type: PostContentTypeEnum.IMAGE;
    src: string;
    title?: string;
    alt?: string;
}

export type PostContent = ContentText | ContentCode | ContentImage;

export interface PostType {
    id: string;
    user: UserType;
    title: string;
    subtitle: string;
    img: string;
    date: string;
    views: number;
    likes: number;
    author: string;
    tags: PostTags[];
    content: PostContent[];
}

export interface PostSchema {
    isLoading: boolean;
    postData?: PostType;
    error?: string;
}

export enum PostListViewModeEnum {
    LIST = 'LIST',
    GRID = 'GRID',
}

export enum OrderEnum {
    ASC = 'asc',
    DESC = 'desc',
}

export enum PostSortFieldEnum {
    DATE = 'date',
    VIEWS = 'views',
    LIKES = 'likes',
    TITLE = 'title',
}
