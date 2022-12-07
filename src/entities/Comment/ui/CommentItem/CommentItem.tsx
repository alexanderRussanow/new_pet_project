import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { CommentType } from '../..';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
// styles
import classes from './CommentItem.module.scss';

export interface CommentItemProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentItem: React.FC<CommentItemProps> = memo( ( { comment, isLoading, className } ) => {
    return (
        <div
            className={ classNames(
                classes.CommentItem,
                {},
                [
                    className
                ] 
            ) }>
            <div className={ classes.content }>
                {isLoading ? (
                    <>
                        <div className={ classes.header }>
                            <Skeleton
                                borderRadius={ '50%' }
                                height={ 30 }
                                width={ 30 } />
                            <Skeleton
                                className={ classes.username }
                                height={ 24 }
                                width={ 100 } />
                        </div>
                        <Skeleton
                            height={ 45 }
                            width={ '100%' } />
                    </>
                ) : (
                    <>
                        <div className={ classes.header }>
                            {comment?.user.avatar ? <Avatar
                                size={ 30 }
                                src={ comment?.user.avatar } /> : null}
                            <Text
                                className={ classes.username }
                                content={ comment?.user.username } />
                        </div>
                        <Text content={ comment?.text } />
                    </>
                )}
            </div>
        </div>
    );
} );
