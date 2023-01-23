import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewCommentForm';
import { getCommentsIsLoading } from 'pages/PostDetailsPage/model/selectors/postDetailsCommentSelectors';
import { addCommentForPost } from 'pages/PostDetailsPage/model/services/addCommentForPost';
import { fetchCommentsByPostId } from 'pages/PostDetailsPage/model/services/fetchCommentsByPostId';
import { getPostComments } from 'pages/PostDetailsPage/model/slice/postDetailsCommentsSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Text } from 'shared/ui/Text';

interface PostDetailCommentsProps {
    postId?: string;
    className?: string;
}

export const PostDetailComments: React.FC<PostDetailCommentsProps> = ( { postId, className } ) => {
    const { t } = useTranslation( 'post' );
    // redux hooks
    const comments = useSelector( getPostComments.selectAll );
    const commentsIsLoading = useSelector( getCommentsIsLoading );

    const dispatch = useAppDispatch();

    useInitialEffect( () => {
        dispatch( fetchCommentsByPostId( postId ) );
    } );

    const onSendComment = useCallback(
        ( text: string ) => {
            dispatch( addCommentForPost( text ) );
        },
        [
            dispatch
        ]
    );
    return (
        <Column
            gap='small'
            className={ classNames(
                'PostDetailComments',
                {},
                [
                    className
                ] 
            ) }
            width100>
            <Text title={ t( 'COMMENTS' ) } />
            <AddNewCommentForm onSendComment={ onSendComment } />
            <CommentList
                comments={ comments }
                isLoading={ commentsIsLoading } />
        </Column>
    );
};
