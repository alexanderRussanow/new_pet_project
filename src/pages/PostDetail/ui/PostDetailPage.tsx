import { CommentList } from 'entities/Comment';
import { PostDetails } from 'entities/Post';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text } from 'shared/ui/Text';
import { commentsIsLoading } from '../model/selectors/postDetailsCommentSelectors';
import { fetchCommentsByPostId } from '../model/services/fetchCommentsByPostId';
import { getPostComments, postCommentsReducer } from '../model/slice/postDetailsCommentsSlice';
// styles
import classes from './PostDetailPage.module.scss';

const reducer: ReducersList = {
    postComments: postCommentsReducer,
};

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();
    // redux hooks
    const comments = useSelector( getPostComments.selectAll );
    const isLoading = useSelector( commentsIsLoading );
    const dispatch = useAppDispatch();

    useInitialEffect( () => {
        dispatch( fetchCommentsByPostId( id ) );
    } );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <div
                className={ classNames(
                    classes.PostDetailPage,
                    {},
                    [] 
                ) }>
                {id ? (
                    <>
                        <PostDetails postId={ id } />
                        <Text
                            className={ classes.commentsTitle }
                            title={ t( 'COMMENTS' ) } />
                        <CommentList
                            comments={ comments }
                            isLoading={ isLoading } />
                    </>
                ) : (
                    <h2>{t( 'POST_NOT_EXIST' )}</h2>
                )}
            </div>
        </DynamicReducerLoader>
    );
};

export default memo( PostDetailPage );
