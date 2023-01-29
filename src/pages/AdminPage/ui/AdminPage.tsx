import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Page } from '@/widgets/Page';
import { Text, TextSizeEnum } from '@/shared/ui/Text/Text';
// style
import classes from './AdminPage.module.scss';

const AdminPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page
            className={ classNames(
                classes.AdminPage,
                {},
                [] 
            ) }>
            <Column
                align='center'
                className={ classes.content }
                justify='center'
                width100>
                <Text
                    size={ TextSizeEnum.MEDIUM }
                    title={ t( 'ADMIN_PAGE' ) } />
            </Column>
        </Page>
    );
};

export default AdminPage;
