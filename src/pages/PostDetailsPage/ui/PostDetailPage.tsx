import { CommentList } from 'entities/Comment';
import { PostDetails, PostList, PostListViewModeEnum } from 'entities/Post';
import { AddNewCommentForm } from 'features/AddNewComment';
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
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { getCommentsIsLoading } from '../model/selectors/postDetailsCommentSelectors';
import { addCommentForPost } from '../model/services/addCommentForPost';
import { fetchCommentsByPostId } from '../model/services/fetchCommentsByPostId';
import { getPostComments } from '../model/slice/postDetailsCommentsSlice';
import { getPostRecommendations } from '../model/slice/postDetailsRecommendationSlice';
import { getRecommendationsIsLoading } from '../model/selectors/postDetailsRecommendationsSelectors';
import { fetchPostRecommendations } from '../model/services/fetchRecommendations';
import { postDetailsMainReducer } from '../model/slice/postDetailsMainSlice';
// styles
import classes from './PostDetailPage.module.scss';

const reducer: ReducersList = {
    postsDetails: postDetailsMainReducer,
};

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();
    const navigate = useNavigate();
    // redux hooks
    const dispatch = useAppDispatch();
    const comments = useSelector( getPostComments.selectAll );
    const commentsIsLoading = useSelector( getCommentsIsLoading );
    const recommendations = useSelector( getPostRecommendations.selectAll );
    const recommendationsIsLoading = useSelector( getRecommendationsIsLoading );

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
        dispatch( fetchPostRecommendations() );
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
                            title={ t( 'RECOMMENDATIONS' ) } />
                        <PostList
                            className={ classes.recommendations }
                            isLoading={ recommendationsIsLoading }
                            posts={ recommendations }
                            target={ '_blank' }
                            viewMode={ PostListViewModeEnum.GRID }
                        />
                        <Text
                            className={ classes.commentsTitle }
                            title={ t( 'COMMENTS' ) } />
                        <AddNewCommentForm onSendComment={ onSendComment } />
                        <CommentList
                            className={ classes.comments }
                            comments={ comments }
                            isLoading={ commentsIsLoading } />
                    </>
                ) : (
                    <h2>{t( 'POST_NOT_EXIST' )}</h2>
                )}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostDetailPage );
