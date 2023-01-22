import { PostList, PostListViewModeEnum } from 'entities/Post';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Text } from 'shared/ui/Text';
import { useGetRecommendationsQuery } from '../api/postRecommendationsApi';
// styles
import classes from './PostRecommendations.module.scss';

export interface PostRecommendationsProps {
    className?: string;
}

export const PostRecommendations: React.FC<PostRecommendationsProps> = ( { className } ) => {
    // rtk hooks
    const { data: recommendations, isLoading: recommendationsIsLoading } = useGetRecommendationsQuery( 4 );
    const { t } = useTranslation( 'post' );

    return (
        <Column
            gap='small'
            className={ classNames(
                classes.PostRecommendations,
                {},
                [
                    className
                ] 
            ) }>
            <Text title={ t( 'RECOMMENDATIONS' ) } />
            <PostList
                isLoading={ recommendationsIsLoading }
                posts={ recommendations }
                target={ '_blank' }
                viewMode={ PostListViewModeEnum.GRID } />
        </Column>
    );
};