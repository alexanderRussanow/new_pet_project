import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Card: React.FC<CardProps> = memo( ( { children, className, ...props } ) => {
    return (
        <div
            { ...props }
            className={ classNames(
                classes.Card,
                {},
                [
                    className
                ] 
            ) }>
            {children}
        </div>
    );
} );
