import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const BlogPage: React.FC = () => {
    const { t } = useTranslation( 'blog' );
    return <h2>{t( 'BLOG' )}</h2>;
};

export default memo( BlogPage );
