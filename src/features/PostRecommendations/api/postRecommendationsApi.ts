import { rtkAPI } from 'shared/api/rtkApi';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

const recommendationApi = rtkAPI.injectEndpoints( {
    endpoints: build => ( {
        getRecommendations: build.query( {
            query: limit => ( {
                url: AppRoutes.POSTS,
                params: {
                    _limit: limit,
                },
                method: 'GET',
            } ),
        } ),
    } ),
} );

export const useGetRecommendationsQuery = recommendationApi.useGetRecommendationsQuery;
