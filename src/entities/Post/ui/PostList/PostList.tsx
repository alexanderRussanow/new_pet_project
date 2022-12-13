import { PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { PostListItem } from '../PostListItem/PostListItem';
import { PostListItemSkeleton } from '../PostListItemSkeleton/PostListItemSkeleton';
// styles
import classes from './PostList.module.scss';

export interface PostListProps {
    posts: PostType[];
    viewMode?: PostListViewModeEnum;
    isLoading?: boolean;
    className?: string;
}

export const PostList: React.FC<PostListProps> = memo( ( { posts, viewMode, isLoading, className } ) => {
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
            {posts.length
                ? posts.map( post => {
                    return <PostListItem
                        className={ classes.card }
                        key={ post.id }
                        post={ post }
                        viewMode={ viewMode } />;
                } )
                : null}
            {isLoading
                ? new Array( viewMode === PostListViewModeEnum.LIST ? 3 : 10 ).fill( 0 ).map( ( item, index ) => {
                    return <PostListItemSkeleton
                        className={ classes.card }
                        key={ index }
                        viewMode={ viewMode } />;
                } )
                : null}
        </div>
    );
} );
