import { CountriesSelect } from 'entities/Counties/ui/CountriesSelect';
import { CurrencySelect } from 'entities/Currency';
import { ProfileType } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
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
                { [ classes.editing ]: !readonly },
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
                    <Avatar
                        readonly={ readonly }
                        src={ profile?.avatar } />
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
                        placeholder={ t( 'YOUR_AVATAR' ) }
                        readonly={ readonly }
                        value={ profile?.avatar }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'avatar',
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
                    <CountriesSelect
                        className={ classes.input }
                        readonly={ readonly }
                        value={ profile?.country }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'country',
                                value 
                            );
                        } }
                    />
                    <CurrencySelect
                        className={ classes.input }
                        readonly={ readonly }
                        value={ profile?.currency }
                        onChange={ value => {
                            onEditProfileData && onEditProfileData(
                                'currency',
                                value 
                            );
                        } }
                    />
                </div>
            )}
        </div>
    );
};
