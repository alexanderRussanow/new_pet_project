import { classNames, isMobileDevice } from '@/shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Row } from '@/shared/ui/Layout/Row/Row';
import { Modal } from '@/shared/ui/Modal/Modal';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text, TextSizeEnum } from '@/shared/ui/Text/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// styles
import classes from './RatingCard.module.scss';

export interface RatingCardProps {
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    className?: string;
    starsRate?: number;
    onCancel?: ( starsCount: number ) => void;
    onSend?: ( starsCount: number, feedback?: string ) => void;
}

export const RatingCard: React.FC<RatingCardProps> = memo( ( { title, hasFeedback, feedbackTitle, className, starsRate = 0, onCancel, onSend } ) => {
    const { t } = useTranslation();

    const isMobile = isMobileDevice();

    const [
        isModalOpen,
        setIsModalOpen
    ] = useState( false );
    const [
        starsCount,
        setStarsCount
    ] = useState( starsRate );
    const [
        feedback,
        setFeedback
    ] = useState( '' );

    const onStarsSelect = useCallback(
        ( selectedStarsCount: number ) => {
            setStarsCount( selectedStarsCount );
            if ( hasFeedback ) {
                setIsModalOpen( true );
            } else {
                onSend && onSend( selectedStarsCount );
            }
        },
        [
            hasFeedback,
            onSend
        ]
    );

    const onCancelClick = useCallback(
        () => {
            onCancel && onCancel( starsCount );
            setIsModalOpen( false );
        },
        [
            onCancel,
            starsCount
        ] 
    );

    const onSendClick = useCallback(
        () => {
            onSend && onSend(
                starsCount,
                feedback.trim() 
            );
            setIsModalOpen( false );
        },
        [
            onSend,
            starsCount,
            feedback
        ] 
    );

    const feedbackContent = (
        <Column
            align='stretch'
            gap='medium'>
            <Text
                size={ TextSizeEnum.MEDIUM }
                title={ feedbackTitle } />
            <Input
                placeholder={ t( 'YOUR_FEEDBACK' ) }
                value={ feedback }
                autoFocus
                onChange={ setFeedback } />
            <Row
                gap='medium'
                justify='end'>
                <Button
                    theme={ ButtonThemeEnum.CLEAR }
                    onClick={ onCancelClick }>
                    {t( 'CANCEL' )}
                </Button>
                <Button
                    theme={ ButtonThemeEnum.OUTLINE }
                    onClick={ onSendClick }>
                    {t( 'SEND' )}
                </Button>
            </Row>
        </Column>
    );

    return (
        <Card
            className={ classNames(
                classes.RatingCard,
                {},
                [
                    className
                ] 
            ) }>
            <Column
                gap='small'
                width100>
                <Text
                    size={ TextSizeEnum.MEDIUM }
                    title={ starsRate ? t( 'YOUR_RATING' ) : title } />
                <StarRating
                    selectedStars={ starsCount }
                    size={ 35 }
                    onSelect={ onStarsSelect } />
                {hasFeedback ? (
                    isMobile ? (
                        <Drawer
                            isOpen={ isModalOpen }
                            onClose={ onCancelClick }>
                            {feedbackContent}
                        </Drawer>
                    ) : (
                        <Modal
                            isOpen={ isModalOpen }
                            lazy
                            onClose={ onCancelClick }>
                            {feedbackContent}
                        </Modal>
                    )
                ) : null}
            </Column>
        </Card>
    );
} );
