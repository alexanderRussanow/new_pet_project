import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PostsPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    return <h2>{t( 'POSTS' )}</h2>;
};

export default memo( PostsPage );
