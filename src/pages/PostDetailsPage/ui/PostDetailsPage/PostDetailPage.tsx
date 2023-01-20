import { CommentList } from 'entities/Comment';
import { PostDetails } from 'entities/Post';
import { AddNewCommentForm } from 'features/AddNewComment';
import { PostRecommendations } from 'features/PostRecommendations';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { getCommentsIsLoading } from '../../model/selectors/postDetailsCommentSelectors';
import { addCommentForPost } from '../../model/services/addCommentForPost';
import { fetchCommentsByPostId } from '../../model/services/fetchCommentsByPostId';
import { getPostComments } from '../../model/slice/postDetailsCommentsSlice';
import { postDetailsMainReducer } from '../../model/slice/postDetailsMainSlice';
// styles
import { PostDetailsPageHeader } from '../PostDetailsPageHeader/PostDetailsPageHeader';
import classes from './PostDetailPage.module.scss';

const reducer: ReducersList = {
    postsDetails: postDetailsMainReducer,
};

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();
    // redux hooks
    const dispatch = useAppDispatch();
    const comments = useSelector( getPostComments.selectAll );
    const commentsIsLoading = useSelector( getCommentsIsLoading );

    const onSendComment = useCallback(
        text => {
            dispatch( addCommentForPost( text ) );
        },
        [
            dispatch
        ]
    );

    useInitialEffect( () => {
        dispatch( fetchCommentsByPostId( id ) );
    } );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <Page
                className={ classNames(
                    classes.PostDetailPage,
                    {},
                    [] 
                ) }>
                {id ? (
                    <Column
                        align='stretch'
                        gap='small'
                        width100>
                        <PostDetailsPageHeader />
                        <PostDetails postId={ id } />
                        <PostRecommendations />
                        <Text
                            className={ classes.commentsTitle }
                            title={ t( 'COMMENTS' ) } />
                        <AddNewCommentForm onSendComment={ onSendComment } />
                        <CommentList
                            className={ classes.comments }
                            comments={ comments }
                            isLoading={ commentsIsLoading } />
                    </Column>
                ) : (
                    <h2>{t( 'POST_NOT_EXIST' )}</h2>
                )}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostDetailPage );
