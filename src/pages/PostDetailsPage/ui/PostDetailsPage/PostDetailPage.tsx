import { PostDetails } from '@/entities/Post';
import { PostRecommendations } from '@/features/PostRecommendations';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout';
import { Page } from '@/widgets/Page';
import { postDetailsMainReducer } from '../../model/slice/postDetailsMainSlice';
import { PostDetailComments } from '../PostDetailsComments/PostDetailsComments';
import { PostDetailsPageHeader } from '../PostDetailsPageHeader/PostDetailsPageHeader';
// styles
import classes from './PostDetailPage.module.scss';
import { PostRating } from '@/features/PostRating';

const reducer: ReducersList = {
    postsDetails: postDetailsMainReducer,
};

const PostDetailPage: React.FC = () => {
    const { t } = useTranslation( 'post' );
    const { id } = useParams();
    // redux hooks

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <Page
                className={ classNames(
                    classes.PostDetailPage,
                    {},
                    [] 
                ) }>
                {id ? (
                    <Column
                        align='stretch'
                        gap='medium'
                        width100>
                        <PostDetailsPageHeader />
                        <PostDetails postId={ id } />
                        <PostRating postId={ id } />
                        <PostRecommendations />
                        <PostDetailComments postId={ id } />
                    </Column>
                ) : (
                    <h2>{t( 'POST_NOT_EXIST' )}</h2>
                )}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostDetailPage );
