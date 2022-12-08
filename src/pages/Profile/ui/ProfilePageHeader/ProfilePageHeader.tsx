import { profileActions, profileDataSelector, profileReadonlySelector, updateProfileData } from 'entities/Profile';
import { userAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
// styles
import classes from './ProfilePageHeader.module.scss';

export const ProfilePageHeader: React.FC = () => {
    const { t } = useTranslation( 'profile' );
    // redux hooks
    const readonly = useSelector( profileReadonlySelector );
    const dispatch = useAppDispatch();
    const authData = useSelector( userAuthData );
    const profileData = useSelector( profileDataSelector );
    const canEdit = authData?.id === profileData?.id;

    const handleEditClick = useCallback(
        () => {
            dispatch( profileActions.setReadonly( false ) );
        },
        [
            dispatch
        ] 
    );

    const handleCancelClick = useCallback(
        () => {
            dispatch( profileActions.cancelEditProfileData() );
        },
        [
            dispatch
        ] 
    );

    const handleSaveClick = useCallback(
        () => {
            dispatch( updateProfileData() );
        },
        [
            dispatch
        ] 
    );

    return (
        <div className={ classes.header }>
            <Text title={ t( 'PROFILE' ) } />
            {canEdit ? (
                readonly ? (
                    <Button
                        theme={ ButtonThemeEnum.OUTLINE }
                        onClick={ handleEditClick }>
                        {t( 'EDIT' )}
                    </Button>
                ) : (
                    <div>
                        <Button
                            theme={ ButtonThemeEnum.BACKGROUND_INVERTED }
                            onClick={ handleSaveClick }>
                            {t( 'SAVE' )}
                        </Button>
                        <Button
                            style={ { marginLeft: 10 } }
                            theme={ ButtonThemeEnum.OUTLINE }
                            onClick={ handleCancelClick }>
                            {t( 'CANCEL' )}
                        </Button>
                    </div>
                )
            ) : null}
            {}
        </div>
    );
};
