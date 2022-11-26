import { ProfileType } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextAlignEnum, TextThemeEnum } from 'shared/ui/Text';
// styles
import classes from './ProfileCard.module.scss';

export interface ProfileCardProps {
    profile?: ProfileType;
    isLoading?: boolean;
    error?: string;
    className?: string;
    readonly?: boolean;
    onEditProfileData?: ( key: keyof ProfileType, value: string ) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ( { profile, isLoading, error, readonly, className, onEditProfileData } ) => {
    const { t } = useTranslation( 'profile' );

    if ( error ) {
        return (
            <div className={ classes.ProfileCard }>
                <Text
                    content={ 'try to refresh page' }
                    textAlign={ TextAlignEnum.CENTER }
                    theme={ TextThemeEnum.ERROR }
                    title={ 'Loading error' } />
            </div>
        );
    }

    return (
        <div
            className={ classNames(
                classes.ProfileCard,
                {},
                [
                    className
                ] 
            ) }>
            {isLoading ? (
                <div className={ classes.loader }>
                    <Loader />
                </div>
            ) : (
                <div className={ classes.content }>
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_NAME' ) }
                        readonly={ readonly }
                        value={ profile?.name }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'name',
                                value 
                            );
                        } }
                    />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_LASTNAME' ) }
                        readonly={ readonly }
                        value={ profile?.lastname }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'lastname',
                                value 
                            );
                        } }
                    />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_USERNAME' ) }
                        readonly={ readonly }
                        value={ profile?.username }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'username',
                                value 
                            );
                        } }
                    />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_EMAIL' ) }
                        readonly={ readonly }
                        value={ profile?.email }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'email',
                                value 
                            );
                        } }
                    />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_PHONE' ) }
                        readonly={ readonly }
                        value={ profile?.phone }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'phone',
                                value 
                            );
                        } }
                    />
                    <Input
                        className={ classes.input }
                        placeholder={ t( 'YOUR_ADDRESS' ) }
                        readonly={ readonly }
                        value={ profile?.address }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'address',
                                value 
                            );
                        } }
                    />
                </div>
            )}
        </div>
    );
};
