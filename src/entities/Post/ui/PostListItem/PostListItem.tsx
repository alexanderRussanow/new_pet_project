import { PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './PostListItem.module.scss';

export interface PostListItemProps {
    post: PostType;
    className?: string;
    viewMode?: PostListViewModeEnum;
}

export const PostListItem: React.FC<PostListItemProps> = memo( ( { post, className } ) => {
    const { t } = useTranslation( 'post' );

    return <div
        className={ classNames(
            classes.PostListItem,
            {},
            [
                className
            ] 
        ) }>{post.title}</div>;
} );
