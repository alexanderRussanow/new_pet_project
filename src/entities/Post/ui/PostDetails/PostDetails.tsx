import { PostContent, PostContentTypeEnum } from 'entities/Post';
import { getPostData, getPostError, getPostIsLoading } from 'entities/Post/model/selectors/postSelectors';
import { fetchPostById } from 'entities/Post/model/services/fetchPostById';
import { postReducer } from 'entities/Post/model/slice/postSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList, DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text, TextSizeEnum, TextThemeEnum } from 'shared/ui/Text';
import { PostCodeBlock } from '../PostCodeBlock/PostCodeBlock';
import { PostImageBlock } from '../PostImageBlock/PostImageBlock';
import { PostTextBlock } from '../PostTextBlock/PostTextBlock';
import CalenderIcon from './../../../../shared/assets/icons/calendar-20-20.svg';
import EyeIcon from './../../../../shared/assets/icons/eye-20-20.svg';
// styles
import classes from './PostDetails.module.scss';

const reducer: ReducersList = {
    post: postReducer,
};

export interface PostDetailsProps {
    postId: string;
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
                        className={ classes.block }
                        content={ contentElement }
                        key={ contentElement.id } />;
                case PostContentTypeEnum.TEXT:
                    return <PostTextBlock
                        className={ classes.block }
                        content={ contentElement }
                        key={ contentElement.id } />;
                case PostContentTypeEnum.CODE:
                    return <PostCodeBlock
                        className={ classes.block }
                        content={ contentElement }
                        key={ contentElement.id } />;
                default:
                    return null;
            }
        },
        [] 
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
                <div className={ classes.logoWrapper }>
                    <Avatar
                        className={ classes.logo }
                        size={ 100 }
                        src={ postData?.img } />
                </div>
                <Text
                    className={ classes.title }
                    content={ postData?.subtitle }
                    size={ TextSizeEnum.LARGE }
                    title={ postData?.title } />
                <div className={ classes.info }>
                    <Icon
                        Svg={ CalenderIcon }
                        className={ classes.icon } />
                    <Text
                        content={ postData?.date }
                        size={ TextSizeEnum.SMALL } />
                </div>
                <div className={ classes.info }>
                    <Icon
                        Svg={ EyeIcon }
                        className={ classes.icon } />
                    <Text
                        content={ String( postData?.views ) }
                        size={ TextSizeEnum.SMALL } />
                </div>
                <div>{postData?.content.map( renderContentElement )}</div>
            </>
        );
    }

    useEffect(
        () => {
            dispatch( fetchPostById( postId ) );
        },
        [
            dispatch,
            postId
        ] 
    );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <div
                className={ classNames(
                    classes.PostDetails,
                    {},
                    [
                        className
                    ] 
                ) } />
            {content}
        </DynamicReducerLoader>
    );
} );
