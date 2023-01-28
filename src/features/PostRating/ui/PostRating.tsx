import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetPostRatingQuery, usePostRatingMutation } from '../api/postRatingApi';
// styles
import classes from './PostRating.module.scss';

export interface PostRatingProps {
    postId: string;
    className?: string;
}

const PostRating: React.FC<PostRatingProps> = memo( ( { postId, className } ) => {
    const { t } = useTranslation();
    const userId = useSelector( getUserAuthData )?.id || '';
    const { data, isLoading } = useGetPostRatingQuery( {
        postId,
        userId,
    } );
    const [
        ratePostMutation
    ] = usePostRatingMutation();

    const rating = data?.[ 0 ];

    const postRatingHandler = useCallback(
        ( starsCount: number, feedback?: string ) => {
            try {
                ratePostMutation( {
                    postId,
                    userId,
                    rating: starsCount,
                    feedback: feedback || '',
                } );
            } catch ( error ) {
                console.error( error );
            }
        },
        [
            postId,
            ratePostMutation,
            userId
        ]
    );

    const onFeedbackSubmit = useCallback(
        ( starsCount: number, feedback?: string ) => {
            postRatingHandler(
                starsCount,
                feedback 
            );
        },
        [
            postRatingHandler
        ]
    );

    const onFeedbackCancel = useCallback(
        ( starsCount: number ) => {
            postRatingHandler( starsCount );
        },
        [
            postRatingHandler
        ]
    );

    if ( isLoading ) {
        return <Skeleton
            height={ '150px' }
            width={ '100%' } />;
    }

    return (
        <div
            className={ classNames(
                classes.PostRating,
                {},
                [
                    className
                ] 
            ) }>
            <RatingCard
                feedbackTitle={ t( 'LEAVE_YOUR_FEEDBACK' ) }
                starsRate={ rating?.rating }
                title={ t( 'ADD_POST_RATING' ) }
                hasFeedback
                onCancel={ onFeedbackCancel }
                onSend={ onFeedbackSubmit }
            />
        </div>
    );
} );

export default PostRating;
