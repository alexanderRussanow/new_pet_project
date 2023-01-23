
import { getPostData, getPostError, getPostIsLoading } from '../../model/selectors/postSelectors';
import { fetchPostById } from '../../model/services/fetchPostById';
import { postReducer } from '../../model/slice/postSlice';
import { PostContent } from '../../model/types/PostType';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList, DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Column, Row } from 'shared/ui/Layout';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text, TextSizeEnum, TextThemeEnum } from 'shared/ui/Text';
import { PostCodeBlock } from '../PostBlocks/PostCodeBlock/PostCodeBlock';
import { PostImageBlock } from '../PostBlocks/PostImageBlock/PostImageBlock';
import { PostTextBlock } from '../PostBlocks/PostTextBlock/PostTextBlock';
import CalenderIcon from './../../../../shared/assets/icons/calendar-20-20.svg';
import EyeIcon from './../../../../shared/assets/icons/eye-20-20.svg';
import { PostContentTypeEnum } from '../../model/consts/postConsts';
// styles
import classes from './PostDetails.module.scss';

const reducer: ReducersList = {
    post: postReducer,
};

export interface PostDetailsProps {
    postId?: string;
    className?: string;
}

export const PostDetails: React.FC<PostDetailsProps> = memo( ( { postId, className } ) => {
    const { t } = useTranslation( 'post' );
    const dispatch = useAppDispatch();
    const postData = useSelector( getPostData );
    const isLoading = useSelector( getPostIsLoading );
    const error = useSelector( getPostError );

    const renderContentElement = useCallback(
        ( contentElement: PostContent ) => {
            switch ( contentElement.type ) {
                case PostContentTypeEnum.IMAGE:
                    return <PostImageBlock
                        content={ contentElement }
                        key={ contentElement.id } />;
                case PostContentTypeEnum.TEXT:
                    return <PostTextBlock
                        content={ contentElement }
                        key={ contentElement.id } />;
                case PostContentTypeEnum.CODE:
                    return <PostCodeBlock
                        content={ contentElement }
                        key={ contentElement.id } />;
                default:
                    return null;
            }
        },
        [] 
    );

    useEffect(
        () => {
            if ( __PROJECT__ !== 'storybook' ) {
                dispatch( fetchPostById( postId ) );
            }
        },
        [
            dispatch,
            postId
        ] 
    );

    let content;
    if ( isLoading ) {
        content = (
            <>
                <div className={ classes.logoWrapper }>
                    <Skeleton
                        borderRadius={ '50%' }
                        className={ classes.logo }
                        height={ 100 }
                        width={ 100 } />
                </div>
                <Skeleton
                    className={ classes.title }
                    height={ 32 }
                    width={ 250 } />
                <Skeleton
                    className={ classes.title }
                    height={ 24 }
                    width={ 400 } />
                <Skeleton
                    className={ classes.skeleton }
                    height={ 100 }
                    width={ '100%' } />
                <Skeleton
                    className={ classes.skeleton }
                    height={ 200 }
                    width={ '100%' } />
            </>
        );
    } else if ( error ) {
        content = <Text
            theme={ TextThemeEnum.ERROR }
            title={ t( 'LOADING_ERROR' ) } />;
    } else {
        content = (
            <>
                <Row
                    justify='center'
                    width100>
                    <Avatar
                        size={ 100 }
                        src={ postData?.img } />
                </Row>
                <Text
                    content={ postData?.subtitle }
                    size={ TextSizeEnum.LARGE }
                    title={ postData?.title } />
                <Row gap='small'>
                    <Icon Svg={ CalenderIcon } />
                    <Text
                        content={ postData?.date }
                        size={ TextSizeEnum.SMALL } />
                </Row>
                <Row gap='small'>
                    <Icon Svg={ EyeIcon } />
                    <Text
                        content={ String( postData?.views ) }
                        size={ TextSizeEnum.SMALL } />
                </Row>
                {postData?.content.map( renderContentElement )}
            </>
        );
    }

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <Column
                align='start'
                gap='small'
                className={ classNames(
                    classes.PostDetails,
                    {},
                    [
                        className
                    ] 
                ) }
                width100>
                {content}
            </Column>
        </DynamicReducerLoader>
    );
} );
