import { PostList, PostListViewModeEnum } from 'entities/Post';
import { useTranslation } from 'react-i18next';
import { rtkAPI } from 'shared/api/rtkApi';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Text } from 'shared/ui/Text';

export interface PostRecommendationsProps {
    className?: string;
}

const recommendationApi = rtkAPI.injectEndpoints( {
    endpoints: build => ( {
        getRecommendations: build.query( {
            query: limit => ( {
                url: `/posts`,
                params: {
                    _limit: limit,
                },
                method: 'GET',
            } ),
        } ),
    } ),
} );

const { useGetRecommendationsQuery } = recommendationApi;

export const PostRecommendations: React.FC<PostRecommendationsProps> = ( { className } ) => {
    // rtk hooks
    const { data: recommendations, isLoading: recommendationsIsLoading } = useGetRecommendationsQuery( 4 );
    const { t } = useTranslation( 'post' );

    return (
        <Column
            gap='small'
            className={ classNames(
                ' PostRecommendations ',
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
