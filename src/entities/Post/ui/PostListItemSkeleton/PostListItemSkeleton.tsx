import { PostListViewModeEnum } from 'entities/Post/model/types/PostType';
import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
// styles
import classes from '../PostListItem/PostListItem.module.scss';

export interface PostListItemSkeletonProps {
    viewMode?: PostListViewModeEnum;
    className?: string;
}

export const PostListItemSkeleton: React.FC<PostListItemSkeletonProps> = memo( ( { viewMode, className } ) => {
    return (
        <div
            className={ classNames(
                classes.PostListItemSkeleton,
                {},
                [
                    className,
                    classes[ viewMode as string ]
                ] 
            ) }>
            {viewMode === PostListViewModeEnum.LIST ? (
                <Card className={ classes.card }>
                    <div className={ classes.header }>
                        <Skeleton
                            borderRadius='50%'
                            height={ 30 }
                            width={ 30 } />
                        <Skeleton
                            className={ classes.username }
                            height={ 16 }
                            width={ 150 } />
                        <Skeleton
                            className={ classes.date }
                            height={ 16 }
                            width={ 150 } />
                    </div>
                    <Skeleton
                        className={ classes.title }
                        height={ 24 }
                        width={ 250 } />
                    <Skeleton
                        className={ classes.img }
                        height={ 200 } />
                    <div className={ classes.footer }>
                        <Skeleton
                            height={ 36 }
                            width={ 200 } />
                    </div>
                </Card>
            ) : (
                <Card className={ classes.card }>
                    <div className={ classes.imageWrapper }>
                        <Skeleton
                            className={ classes.img }
                            height={ 200 }
                            width={ 200 } />
                    </div>
                    <div className={ classes.infoWrapper }>
                        <Skeleton
                            height={ 16 }
                            width={ 130 } />
                    </div>
                    <Skeleton
                        className={ classes.title }
                        height={ 16 }
                        width={ 150 } />
                </Card>
            )}
        </div>
    );
} );
