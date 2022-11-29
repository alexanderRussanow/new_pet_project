import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const BlogDetailPage: React.FC = () => {
    const { t } = useTranslation( 'blog' );
    return <h2>{t( 'BLOG_DETAIL' )}</h2>;
};

export default memo( BlogDetailPage );
