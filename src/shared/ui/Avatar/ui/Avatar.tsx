import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Avatar.module.scss';

export interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    readonly?: boolean;
    inlineStyle?: CSSProperties;
    onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ( {
    src = 'https://robohash.org/stefan-one',
    alt = 'avatar',
    className,
    size = 50,
    inlineStyle,
    readonly,
    onClick,
} ) => {
    const styles = useMemo<CSSProperties>(
        () => {
            return {
                ...inlineStyle,
                width: size,
                height: size,
                minHeight: size,
                minWidth: size,
            };
        },
        [
            size,
            inlineStyle
        ] 
    );

    return (
        <img
            alt={ alt }
            src={ src }
            style={ styles }
            className={ classNames(
                classes.Avatar,
                { [ classes.readonly ]: readonly },
                [
                    className
                ] 
            ) }
            onClick={ onClick }
        />
    );
};
