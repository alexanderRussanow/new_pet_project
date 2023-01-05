import { CountriesSelect } from 'entities/Counties/ui/CountriesSelect';
import { CurrencySelect } from 'entities/Currency';
import { ProfileType } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Column, Row } from 'shared/ui/Layout';
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

export const ProfileCard: React.FC<ProfileCardProps> = ( { profile, error, readonly = true, isLoading, className, onEditProfileData } ) => {
    const { t } = useTranslation( 'profile' );

    if ( error ) {
        return (
            <Row
                className={ classes.ProfileCard }
                justify='center'
                width100>
                <Text
                    content={ 'try to refresh page' }
                    textAlign={ TextAlignEnum.CENTER }
                    theme={ TextThemeEnum.ERROR }
                    title={ 'Loading error' } />
            </Row>
        );
    }

    if ( isLoading ) {
        return (
            <Row
                className={ classes.ProfileCard }
                justify='center'
                width100>
                <Loader />
            </Row>
        );
    }

    return (
        <Column
            align='start'
            gap='large'
            className={ classNames(
                classes.ProfileCard,
                { [ classes.editing ]: !readonly },
                [
                    className
                ] 
            ) }
            width100>
            {profile?.avatar ? <Avatar
                readonly={ readonly }
                src={ profile?.avatar } /> : null}

            <Input
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
                readonly={ readonly }
                value={ profile?.currency }
                onChange={ value => {
                    onEditProfileData && onEditProfileData(
                        'currency',
                        value 
                    );
                } }
            />
        </Column>
    );
};
