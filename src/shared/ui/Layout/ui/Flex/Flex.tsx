import { classNames } from '@/shared/lib/utility/UtilityMethods';
import classes from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type FlexDirection = 'row' | 'rowReverse' | 'column' | 'columnReverse';
export type FlexGap = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    width100?: boolean;
    className?: string;
}

const justifyStyle: Record<FlexJustify, string> = {
    start: classes.justifyStart,
    end: classes.justifyEnd,
    center: classes.justifyCenter,
    between: classes.justifyBetween,
    around: classes.justifyAround,
    evenly: classes.justifyEvenly,
};

const alignStyle: Record<FlexAlign, string> = {
    start: classes.alignStart,
    end: classes.alignEnd,
    center: classes.alignCenter,
    stretch: classes.alignStretch,
    baseline: classes.alignBaseline,
};

const directionStyle: Record<FlexDirection, string> = {
    row: classes.directionRow,
    rowReverse: classes.directionRowReverse,
    column: classes.directionColumn,
    columnReverse: classes.directionColumnReverse,
};

const gapStyle: Record<FlexGap, string> = {
    extraSmall: classes.gapExtraSmall,
    small: classes.gapSmall,
    medium: classes.gapMedium,
    large: classes.gapLarge,
    extraLarge: classes.gapExtraLarge,
};

export const Flex: React.FC<FlexProps> = ( { justify = 'start', align = 'center', direction = 'row', gap, width100, className, children } ) => {
    const styles = [
        className,
        justifyStyle[ justify ],
        alignStyle[ align ],
        directionStyle[ direction ],
        gap && gapStyle[ gap ]
    ];

    return (
        <div
            className={ classNames(
                classes.Flex,
                {
                    [ classes.width100 ]: width100,
                },
                styles
            ) }>
            {children}
        </div>
    );
};
