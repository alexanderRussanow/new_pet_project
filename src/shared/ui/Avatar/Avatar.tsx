import { CSSProperties, useMemo } from 'react';
import { classNames } from '../../lib/utility/UtilityMethods';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';
import { Icon } from '../Icon/Icon';
import DefaultUserIcon from '../../assets/icons/default-user.svg';

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

    const fallback = <Skeleton
        borderRadius={ '50%' }
        height={ size }
        width={ size } />;

    const errorFallback = <Icon
        Svg={ DefaultUserIcon }
        height={ size }
        width={ size }
        inverted />;

    return (
        <AppImage
            alt={ alt }
            errorFallback={ errorFallback }
            fallback={ fallback }
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
