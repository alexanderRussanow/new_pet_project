import { getPostData, getPostError, getPostIsLoading } from 'entities/Post/model/selectors/postSelectors';
import { fetchPostById } from 'entities/Post/model/services/fetchPostById';
import { postReducer } from 'entities/Post/model/slice/postSlice';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReducersList, DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Text, TextThemeEnum } from 'shared/ui/Text';
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

    let content;
    if ( isLoading ) {
        content = (
            <div>
                <Skeleton
                    borderRadius={ '50%' }
                    className={ classes.logo }
                    height={ 150 }
                    width={ 150 } />
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
            </div>
        );
    } else if ( error ) {
        content = <Text
            theme={ TextThemeEnum.ERROR }
            title={ t( 'LOADING_ERROR' ) } />;
    } else {
        content = <h2>{t( 'POST_DETAIL' )}</h2>;
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
