import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Page } from '@/widgets/Page';
// styles
import classes from './Page404.module.scss';

interface Page404Props {
    className?: string;
}

export const Page404: React.FC<Page404Props> = ( { className } ) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid='page404'
            className={ classNames(
                classes.page404,
                {},
                [
                    className
                ] 
            ) }>
            <h2 style={ { marginBottom: 20 } }>{t( '404' )}</h2>

            <img
                alt='404page'
                src='/media/gifs/419.gif' />
        </Page>
    );
};
