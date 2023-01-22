import { getUserAuthData } from 'entities/User';
import { getProfileReadonlySelector, getProfileDataSelector } from 'features/EditableProfileCard/model/selectors/profileDataSelectors';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';
import { profileActions } from 'features/EditableProfileCard/model/slice/profileSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Row } from 'shared/ui/Layout';
import { Text } from 'shared/ui/Text';

export const EditableProfileCardHeader: React.FC = () => {
    const { t } = useTranslation( 'profile' );
    // redux hooks
    const readonly = useSelector( getProfileReadonlySelector );
    const dispatch = useAppDispatch();
    const authData = useSelector( getUserAuthData );
    const profileData = useSelector( getProfileDataSelector );
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
        <Row
            justify='between'
            width100>
            <Text title={ t( 'PROFILE' ) } />
            {canEdit ? (
                readonly ? (
                    <Button
                        theme={ ButtonThemeEnum.OUTLINE }
                        onClick={ handleEditClick }>
                        {t( 'EDIT' )}
                    </Button>
                ) : (
                    <Row gap='small'>
                        <Button
                            theme={ ButtonThemeEnum.BACKGROUND_INVERTED }
                            onClick={ handleSaveClick }>
                            {t( 'SAVE' )}
                        </Button>
                        <Button
                            theme={ ButtonThemeEnum.OUTLINE }
                            onClick={ handleCancelClick }>
                            {t( 'CANCEL' )}
                        </Button>
                    </Row>
                )
            ) : null}
        </Row>
    );
};
