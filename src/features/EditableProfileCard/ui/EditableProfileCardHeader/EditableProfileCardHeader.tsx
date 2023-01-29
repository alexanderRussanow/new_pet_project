import { getUserAuthData } from '@/entities/User';
import { getProfileReadonlySelector, getProfileDataSelector } from '../../model/selectors/profileDataSelectors';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button/Button';
import { Row } from '@/shared/ui/Layout/Row/Row';
import { Text } from '@/shared/ui/Text/Text';

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
                        data-testid='EditableProfileCardHeader.EditButton'
                        theme={ ButtonThemeEnum.OUTLINE }
                        onClick={ handleEditClick }>
                        {t( 'EDIT' )}
                    </Button>
                ) : (
                    <Row gap='small'>
                        <Button
                            data-testid='EditableProfileCardHeader.SaveButton'
                            theme={ ButtonThemeEnum.BACKGROUND_INVERTED }
                            onClick={ handleSaveClick }>
                            {t( 'SAVE' )}
                        </Button>
                        <Button
                            data-testid='EditableProfileCardHeader.CancelButton'
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
