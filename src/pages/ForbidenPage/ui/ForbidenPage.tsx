import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout';
import { Text, TextSizeEnum } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
// style
import classes from './ForbidenPage.module.scss';

const ForbidenPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page
            className={ classNames(
                classes.ForbidenPage,
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
                    title={ `${ t( 'FORBIDEN_PAGE' ) } 😔` } />
            </Column>
        </Page>
    );
};

export default ForbidenPage;
