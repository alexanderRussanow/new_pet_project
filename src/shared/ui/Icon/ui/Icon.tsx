import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './Icon.module.scss';

export interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Icon = memo( ( { Svg, className }: IconProps ) => {
    return <Svg
        className={ classNames(
            classes.Icon,
            {},
            [
                className
            ] 
        ) } />;
} );
