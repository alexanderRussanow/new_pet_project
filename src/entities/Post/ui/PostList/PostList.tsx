import { PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { t } from 'i18next';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text } from 'shared/ui/Text';
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
    const { t } = useTranslation( 'post' );
    const getViewMode = viewMode === PostListViewModeEnum.LIST ? 3 : 10;

    if ( !isLoading && !posts.length ) {
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
                <Text content={ t( 'POSTS_NOT_FOUND' ) } />
            </div>
        );
    }

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
