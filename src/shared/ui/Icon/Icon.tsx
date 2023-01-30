import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './Icon.module.scss';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    className?: string;
}

export const Icon = memo( ( { Svg, inverted, className, ...props }: IconProps ) => {
    return <Svg
        { ...props }
        className={ classNames(
            classes.Icon,
            { [ classes.inverted ]: inverted },
            [
                className
            ] 
        ) } />;
} );
