import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { CommentType } from '../..';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Row } from '@/shared/ui/Layout/Row/Row';
import { RoutesPath } from '@/shared/types/routesPaths';
// styles
import classes from './CommentItem.module.scss';

export interface CommentItemProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentItem: React.FC<CommentItemProps> = memo( ( { comment, isLoading, className } ) => {
    return (
        <Column
            align='start'
            gap='small'
            className={ classNames(
                classes.CommentItem,
                {},
                [
                    className
                ] 
            ) }
            width100>
            {isLoading ? (
                <>
                    <Row gap='small'>
                        <Skeleton
                            borderRadius={ '50%' }
                            height={ 30 }
                            width={ 30 } />
                        <Skeleton
                            height={ 24 }
                            width={ 100 } />
                    </Row>
                    <Skeleton
                        height={ 45 }
                        width={ '100%' } />
                </>
            ) : (
                <>
                    <AppLink to={ RoutesPath.profile + comment?.user.id }>
                        <Row gap='small'>
                            {comment?.user.avatar ? <Avatar
                                size={ 30 }
                                src={ comment?.user.avatar } /> : null}
                            <Text content={ comment?.user.username } />
                        </Row>
                    </AppLink>
                    <Text content={ comment?.text } />
                </>
            )}
        </Column>
    );
} );
