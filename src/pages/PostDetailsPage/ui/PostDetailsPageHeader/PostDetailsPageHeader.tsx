import { getPostData } from '@/entities/Post';
import { getPostEditSelector } from '../../../PostDetailsPage/model/selectors/postIsEditSelectors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button/Button';
import { Row } from '@/shared/ui/Layout/Row/Row';

export interface PostDetailsPageHeaderProps {
    className?: string;
}

export const PostDetailsPageHeader: React.FC<PostDetailsPageHeaderProps> = memo( ( { className } ) => {
    const navigate = useNavigate();
    const { t } = useTranslation( 'post' );
    // redux hooks
    const isEdit = useSelector( getPostEditSelector );
    const postDetails = useSelector( getPostData );

    const backToPostsList = useCallback(
        () => {
            navigate( RoutesPath.posts );
        },
        [
            navigate
        ] 
    );

    const editPost = useCallback(
        () => {
            navigate( `${ RoutesPath.posts }/${ postDetails?.id }/edit` );
        },
        [
            navigate,
            postDetails?.id
        ] 
    );

    return (
        <Row
            justify='between'
            className={ classNames(
                'PostDetailsPageHeader',
                {},
                [
                    className
                ] 
            ) }>
            <Button
                theme={ ButtonThemeEnum.OUTLINE }
                onClick={ backToPostsList }>
                {t( 'STEP_BACK' )}
            </Button>
            {isEdit ? (
                <Button
                    theme={ ButtonThemeEnum.OUTLINE }
                    onClick={ editPost }>
                    {t( 'EDIT' )}
                </Button>
            ) : null}
        </Row>
    );
} );
