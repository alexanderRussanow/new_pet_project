import { PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { PostListItem } from '../PostListItem/PostListItem';

// styles
import classes from './PostsList.module.scss';

export interface PostListProps {
    posts: PostType[];
    viewMode?: PostListViewModeEnum;
    isLoading?: boolean;
    className?: string;
}

export const PostList: React.FC<PostListProps> = memo( ( { posts, viewMode = PostListViewModeEnum.LIST, isLoading, className } ) => {
    const { t } = useTranslation( 'post' );
    return (
        <div
            className={ classNames(
                classes.PostList,
                {},
                [
                    className,
                    classes[ viewMode as string ]
                ] 
            ) }>
            {posts.length ? posts.map( post => <PostListItem
                key={ post.id }
                post={ post }
                viewMode={ viewMode } /> ) : null}
        </div>
    );
} );
