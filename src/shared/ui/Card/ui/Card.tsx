import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './Card.module.scss';

export enum CardThemeEnum {
    DEFAULT = 'default',
    OUTLINE = 'outline',
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardThemeEnum;
}

export const Card: React.FC<CardProps> = memo( ( { children, className, theme = CardThemeEnum.DEFAULT, ...props } ) => {
    return (
        <div
            { ...props }
            className={ classNames(
                classes.Card,
                {},
                [
                    className,
                    classes[ theme ]
                ] 
            ) }>
            {children}
        </div>
    );
} );
