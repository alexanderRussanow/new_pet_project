export type PostTags = 'IT' | 'Web' | 'Design' | 'Marketing' | 'Business' | 'Science' | 'Other';

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
