import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Row } from 'shared/ui/Layout';
import { getCommentTextSelector } from '../model/selectors/addNewCommentSelectors';
import { addNewCommentActions, addNewCommentReducer } from '../model/slice/addCommentSlice';
// styles
import classes from './AddNewCommentForm.module.scss';

export interface AddNewCommentFormProps {
    className?: string;
    onSendComment: ( text: string ) => void;
}

const reducer: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewCommentForm: React.FC<AddNewCommentFormProps> = memo( ( { onSendComment, className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const text = useSelector( getCommentTextSelector );
    //  const error = useSelector( getCommentErrorSelector );
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        ( value: string ) => {
            dispatch( addNewCommentActions.addText( value ) );
        },
        [
            dispatch
        ]
    );

    const onSendCommentHandler = useCallback(
        () => {
            onSendComment( text );
            onCommentTextChange( '' );
        },
        [
            onSendComment,
            onCommentTextChange,
            text
        ] 
    );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <Row
                justify='between'
                className={ classNames(
                    classes.AddNewCommentForm,
                    {},
                    [
                        className
                    ] 
                ) }
                width100>
                <Input
                    className={ classes.input }
                    placeholder={ t( 'TYPE_COMMENT' ) }
                    value={ text }
                    onChange={ onCommentTextChange } />
                <Button
                    theme={ ButtonThemeEnum.OUTLINE }
                    onClick={ onSendCommentHandler }>
                    {t( 'SEND_COMMENT' )}
                </Button>
            </Row>
        </DynamicReducerLoader>
    );
} );

export default AddNewCommentForm;
