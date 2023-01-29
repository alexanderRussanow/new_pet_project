import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './Skeleton.module.scss';

export interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    className?: string;
    borderRadius?: string;
    styles?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = memo( ( { className, height, width, borderRadius, styles } ) => {
    const style = {
        ...styles,
        height,
        width,
        borderRadius,
    };

    return <div
        style={ style }
        className={ classNames(
            classes.Skeleton,
            {},
            [
                className
            ] 
        ) } />;
} );
