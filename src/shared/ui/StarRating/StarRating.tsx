import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { memo, useState } from 'react';
import { Icon } from '../Icon';
import { Row } from '../Layout';
import StarIcon from './../../assets/icons/star-20-20.svg';
// styls
import classes from './StarRating.module.scss';

const starsArray = [
    1,
    2,
    3,
    4,
    5
];

export interface StarRatingProps {
    size?: number;
    selectedStars?: number;
    className?: string;
    onSelect?: ( starsCount: number ) => void;
}

export const StarRating: React.FC<StarRatingProps> = memo( ( { size = 25, selectedStars = 0, className, onSelect } ) => {
    const [
        isSelected,
        setIsSelected
    ] = useState( Boolean( selectedStars ) );

    const [
        currentStarsCount,
        setCurrentStarsCount
    ] = useState( selectedStars );

    const onMouseEnter = ( starsCount: number ) => () => {
        if ( !isSelected ) {
            setCurrentStarsCount( starsCount );
        }
    };

    const onMouseLeave = () => {
        if ( !isSelected ) {
            setCurrentStarsCount( 0 );
        }
    };

    const onclick = ( starsCount: number ) => () => {
        if ( !isSelected ) {
            onSelect && onSelect( starsCount );
            setIsSelected( true );
        }
    };

    return (
        <Row
            className={ classNames(
                classes.StarRating,
                {},
                [
                    className
                ] 
            ) }>
            {starsArray.map( star => (
                <Icon
                    Svg={ StarIcon }
                    height={ size }
                    key={ star }
                    width={ size }
                    className={ classNames(
                        classes.icon,
                        { [ classes.hovered ]: currentStarsCount >= star, [ classes.selected ]: isSelected },

                        []
                    ) }
                    onClick={ onclick( star ) }
                    onMouseEnter={ onMouseEnter( star ) }
                    onMouseLeave={ onMouseLeave }
                />
            ) )}
        </Row>
    );
} );
