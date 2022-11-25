import { profileDataSelector, profileErrorSelector, profileIsLoadingSelector } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text } from 'shared/ui/Text';

// styles
import classes from './ProfileCard.module.scss';

export const ProfileCard: React.FC = () => {
    const { t } = useTranslation( 'profile' );
    const dispatch = useDispatch();
    const profile = useSelector( profileDataSelector );
    const isLoading = useSelector( profileIsLoadingSelector );
    const error = useSelector( profileErrorSelector );

    return (
        <div className={ classNames( classes.ProfileCard ) }>
            <div className={ classes.header }>
                <Text title={ t( 'PROFILE' ) } />
                <Button theme={ ButtonThemeEnum.OUTLINE }>{t( 'EDIT' )}</Button>
            </div>
            {error ? <Text content={ error } /> : null}
            {isLoading ? (
                <div className={ classes.loader }>
                    <Loader />
                </div>
            ) : (
                <div className={ classes.content }>
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_NAME' ) }
                        value={ profile?.name } />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_LASTNAME' ) }
                        value={ profile?.lastname } />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_USERNAME' ) }
                        value={ profile?.username } />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_EMAIL' ) }
                        value={ profile?.email } />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_PHONE' ) }
                        value={ profile?.phone } />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_ADDRESS' ) }
                        value={ profile?.address } />
                </div>
            )}
        </div>
    );
};
