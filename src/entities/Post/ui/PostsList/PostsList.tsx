import { PostsListViewModeEnum } from '../../model/consts/postConsts';
import { PostType } from '../../model/types/PostType';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Text } from '@/shared/ui/Text/Text';
import { PostListItem } from '../PostListItem/PostListItem';
import { PostListItemSkeleton } from '../PostListItemSkeleton/PostListItemSkeleton';

// styles
import classes from './PostsList.module.scss';

export interface PostsListProps {
    posts: PostType[];
    viewMode?: PostsListViewModeEnum;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
}

export const PostsList: React.FC<PostsListProps> = memo( ( { posts, target, viewMode, isLoading, className } ) => {
    const { t } = useTranslation( 'post' );
    const getViewMode = viewMode === PostsListViewModeEnum.LIST ? 3 : 6;

    if ( !isLoading && !posts.length ) {
        return (
            <div
                className={ classNames(
                    classes.PostsList,
                    {},
                    [
                        className,
                        classes[ viewMode as string ]
                    ] 
                ) }>
                <Text content={ t( 'POSTS_NOT_FOUND' ) } />
            </div>
        );
    }

    return (
        <div
            data-testid='postsList'
            className={ classNames(
                classes.PostsList,
                {},
                [
                    className,
                    classes[ viewMode as string ]
                ] 
            ) }>
            {posts && posts.length
                ? posts.map( post => {
                    return <PostListItem
                        className={ classes.card }
                        key={ post.id }
                        post={ post }
                        target={ target }
                        viewMode={ viewMode } />;
                } )
                : null}
            {isLoading
                ? new Array( getViewMode ).fill( 0 ).map( ( item, index ) => {
                    return (
                        <PostListItemSkeleton
                            className={ classes.card }
                            // eslint-disable-next-line react/no-array-index-key
                            key={ index }
                            viewMode={ viewMode }
                        />
                    );
                } )
                : null}
        </div>
    );
} );
