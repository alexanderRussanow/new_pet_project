import { CommentList } from 'entities/Comment';
import { PostDetails } from 'entities/Post';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text } from 'shared/ui/Text';
// styles
import classes from './PostDetailPage.module.scss';

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();

    return (
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
                    <CommentList comments={ [] } />
                </>
            ) : (
                <h2>{t( 'POST_NOT_EXIST' )}</h2>
            )}
        </div>
    );
};

export default memo( PostDetailPage );
