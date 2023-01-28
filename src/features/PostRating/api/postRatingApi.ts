import { RatingType } from '@/entities/Rating';
import { rtkAPI } from '@/shared/api/rtkApi';

interface GetPostRatingType {
    userId: string;
    postId: string;
}

interface PostPostRatingType extends GetPostRatingType {
    rating: number;
    feedback: string;
}

const postRatingApi = rtkAPI.injectEndpoints( {
    endpoints: build => ( {
        getPostRating: build.query<RatingType[], { userId: string; postId: string }>( {
            query: ( { userId, postId } ) => ( {
                url: '/post-rating',
                method: 'GET',
                params: {
                    userId,
                    postId,
                },
            } ),
        } ),
        postRatingMutation: build.mutation<void, PostPostRatingType>( {
            query: args => ( {
                url: '/post-rating',
                method: 'POST',
                body: args,
            } ),
        } ),
    } ),
} );

export const useGetPostRatingQuery = postRatingApi.useGetPostRatingQuery;
export const usePostRatingMutation = postRatingApi.usePostRatingMutationMutation;
