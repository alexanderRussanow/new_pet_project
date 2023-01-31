import { PostsList, PostsListViewModeEnum } from '@/entities/Post';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Text } from '@/shared/ui/Text/Text';
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

    if ( !recommendations || recommendations.length === 0 ) {
        return null;
    }

    return (
        <Column
            data-testid='postRecommendations'
            gap='small'
            className={ classNames(
                classes.PostRecommendations,
                {},
                [
                    className
                ] 
            ) }>
            <Text title={ t( 'RECOMMENDATIONS' ) } />
            <PostsList
                isLoading={ recommendationsIsLoading }
                posts={ recommendations }
                target={ '_blank' }
                viewMode={ PostsListViewModeEnum.GRID } />
        </Column>
    );
};
