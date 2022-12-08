import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { getCommentErrorSelector, getCommentTextSelector } from '../model/selectors/addNewCommentSelectors';
import { sendComment } from '../model/services/sendComment';
import { addNewCommentActions, addNewCommentReducer } from '../model/slice/addCommentSlice';
// styles
import classes from './AddNewCommentForm.module.scss';

export interface AddNewCommentFormProps {
    className?: string;
}

const reducer: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewCommentForm: React.FC<AddNewCommentFormProps> = memo( ( { className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const text = useSelector( getCommentTextSelector );
    const error = useSelector( getCommentErrorSelector );
    const dispatch = useAppDispatch();

    const onTextChange = useCallback(
        ( value: string ) => {
            dispatch( addNewCommentActions.addText( value ) );
        },
        [
            dispatch
        ]
    );

    const onSendComment = useCallback(
        () => {
            dispatch( sendComment() );
        },
        [
            dispatch
        ] 
    );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <div
                className={ classNames(
                    classes.AddNewCommentForm,
                    {},
                    [
                        className
                    ] 
                ) }>
                <Input
                    className={ classes.input }
                    placeholder={ t( 'TYPE_COMMENT' ) }
                    value={ text }
                    onChange={ onTextChange } />
                <Button
                    theme={ ButtonThemeEnum.OUTLINE }
                    onClick={ onSendComment }>
                    {t( 'SEND_COMMENT' )}
                </Button>
            </div>
        </DynamicReducerLoader>
    );
} );

export default AddNewCommentForm;
