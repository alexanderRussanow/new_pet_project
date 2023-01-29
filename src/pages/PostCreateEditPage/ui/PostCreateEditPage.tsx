import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
// styles
import classes from './PostCreateEditPage.module.scss';

export interface PostCreateEditPageProps {
    className?: string;
}

/**
 * @info Page not ready yet
 * @TODO add edit and create page logic
 */
const PostCreateEditPage: React.FC<PostCreateEditPageProps> = ( { className } ) => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean( id );

    return (
        <Page
            className={ classNames(
                classes.PostCreateEditPage,
                {},
                [
                    className
                ] 
            ) }>
            <Text
                content={ t( 'PAGE_NOT_READY_YET' ) }
                title={ t( isEdit ? 'EDIT_PAGE' : 'CREATE_PAGE' ) } />
        </Page>
    );
};

export default memo( PostCreateEditPage );
