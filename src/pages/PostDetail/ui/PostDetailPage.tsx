import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    return <h2>{t( 'POST_DETAIL' )}</h2>;
};

export default memo( PostDetailPage );
