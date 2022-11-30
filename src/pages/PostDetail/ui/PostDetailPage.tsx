import { PostDetails } from 'entities/Post';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();

    return <div>{id ? <PostDetails postId={ id } /> : <h2>{t( 'POST_NOT_EXIST' )}</h2>}</div>;
};

export default memo( PostDetailPage );
