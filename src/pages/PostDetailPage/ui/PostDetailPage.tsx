import { CommentList } from 'entities/Comment';
import { PostDetails } from 'entities/Post';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Page } from 'widgets/Page';
import { Text } from 'shared/ui/Text';
import { getCommentsIsLoading } from '../model/selectors/postDetailsCommentSelectors';
import { addCommentForPost } from '../model/services/addCommentForPost';
import { fetchCommentsByPostId } from '../model/services/fetchCommentsByPostId';
import { getPostComments, postCommentsReducer } from '../model/slice/postDetailsCommentsSlice';
// styles
import classes from './PostDetailPage.module.scss';
import { AddNewCommentForm1 } from 'features/AddNewComment1';

const reducer: ReducersList = {
    postComments: postCommentsReducer,
};

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();
    const navigate = useNavigate();
    // redux hooks
    const comments = useSelector( getPostComments.selectAll );
    const isLoading = useSelector( getCommentsIsLoading );

    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        text => {
            dispatch( addCommentForPost( text ) );
        },
        [
            dispatch
        ]
    );

    const backToPostsList = useCallback(
        () => {
            navigate( RoutesPath.posts );
        },
        [
            navigate
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
                    <>
                        <Button
                            theme={ ButtonThemeEnum.OUTLINE }
                            onClick={ backToPostsList }>
                            {t( 'STEP_BACK' )}
                        </Button>
                        <PostDetails postId={ id } />
                        <Text
                            className={ classes.commentsTitle }
                            title={ t( 'COMMENTS' ) } />
                        <AddNewCommentForm1 onSendComment={ onSendComment } />
                        <CommentList
                            className={ classes.comments }
                            comments={ comments }
                            isLoading={ isLoading } />
                    </>
                ) : (
                    <h2>{t( 'POST_NOT_EXIST' )}</h2>
                )}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostDetailPage );
