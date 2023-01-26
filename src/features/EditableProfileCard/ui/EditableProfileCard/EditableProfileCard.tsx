import { ProfileCard, ProfileType } from '@/entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout';
import { Text, TextThemeEnum } from '@/shared/ui/Text';
import {
    getProfileErrorSelector,
    getProfileFormDataSelector,
    getProfileIsLoadingSelector,
    getProfileReadonlySelector,
    getProfileValidationErrorsSelector,
} from '../../model/selectors/profileDataSelectors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

export interface EditableProfileCardProps {
    userId?: string;
    className?: string;
}

const profilePageReducer: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard: React.FC<EditableProfileCardProps> = ( { userId, className } ) => {
    const { t } = useTranslation( 'profile' );
    // redux hooks
    const dispatch = useAppDispatch();
    const isLoading = useSelector( getProfileIsLoadingSelector );
    const error = useSelector( getProfileErrorSelector );
    const readonly = useSelector( getProfileReadonlySelector );
    const profileFormData = useSelector( getProfileFormDataSelector );
    const validationErrors = useSelector( getProfileValidationErrorsSelector );

    const onEditProfileData = useCallback(
        ( key: keyof ProfileType, value: string ) => {
            const newProfile: DeepPartial<ProfileType> = {
                ...profileFormData,
                [ key ]: value,
            };
            dispatch( profileActions.editProfileData( newProfile as ProfileType ) );
        },
        [
            dispatch,
            profileFormData
        ]
    );

    useInitialEffect( () => {
        if ( userId ) {
            dispatch( fetchProfileData( userId ) );
        }
    } );
    return (
        <DynamicReducerLoader reducers={ profilePageReducer }>
            <Column
                data-testid='EditableProfileCard'
                gap='small'
                className={ classNames(
                    'EditableProfileCard',
                    {},
                    [
                        className
                    ] 
                ) }
                width100>
                <EditableProfileCardHeader />
                {validationErrors
                    ? validationErrors.map( error => (
                        <Text
                            content={ t( error ) }
                            data-testid='EditableProfileCard.Error'
                            key={ error }
                            theme={ TextThemeEnum.ERROR } />
                    ) )
                    : null}
                <ProfileCard
                    error={ error }
                    isLoading={ isLoading }
                    profile={ profileFormData }
                    readonly={ readonly }
                    onEditProfileData={ onEditProfileData }
                />
            </Column>
        </DynamicReducerLoader>
    );
};
