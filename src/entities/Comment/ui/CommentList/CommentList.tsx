import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { CommentType } from '../../model/types/Comment';
import { CommentItem } from '../CommentItem/CommentItem';

export interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList: React.FC<CommentListProps> = memo( ( { comments, isLoading, className } ) => {
    const { t } = useTranslation();

    const content = comments?.length ? (
        comments.map( comment => <CommentItem
            comment={ comment }
            key={ comment.id } /> )
    ) : (
        <Text content={ t( 'NO_COMMENTS' ) } />
    );

    return (
        <div
            className={ classNames(
                'commentList',
                {},
                [
                    className
                ] 
            ) }>
            {isLoading ? (
                <>
                    <CommentItem isLoading />
                    <CommentItem isLoading />
                    <CommentItem isLoading />
                </>
            ) : (
                content
            )}
        </div>
    );
} );
