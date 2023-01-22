import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// style
import classes from './Text.module.scss';

export enum TextAlignEnum {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextThemeEnum {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
    INVERTED = 'inverted',
}

export enum TextSizeEnum {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XL = 'xl',
}

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4';

const headingSizeMap: Record<TextSizeEnum, HeadingSize> = {
    [ TextSizeEnum.SMALL ]: 'h4',
    [ TextSizeEnum.MEDIUM ]: 'h3',
    [ TextSizeEnum.LARGE ]: 'h2',
    [ TextSizeEnum.XL ]: 'h1',
};

interface TextProps {
    'className'?: string;
    'title'?: string;
    'content'?: string;
    'theme'?: TextThemeEnum;
    'size'?: TextSizeEnum;
    'textAlign'?: TextAlignEnum;
    'data-testid'?: string;
}

export const Text: React.FC<TextProps> = memo( ( {
    className,
    title,
    content,
    theme = TextThemeEnum.INFO,
    textAlign = TextAlignEnum.LEFT,
    size = TextSizeEnum.LARGE,
    'data-testid': dataTestId = 'Text',
} ) => {
    const Heading = headingSizeMap[ size ];

    return (
        <div
            className={ classNames(
                classes.text,
                {},
                [
                    className,
                    classes[ theme ],
                    classes[ textAlign ],
                    classes[ size ]
                ] 
            ) }>
            {title ? (
                <Heading
                    className={ classes.title }
                    data-testid={ `${ dataTestId }.Header` }>
                    {title}
                </Heading>
            ) : null}
            {content ? (
                <p
                    className={ classes.content }
                    data-testid={ `${ dataTestId }.Paragraph` }>
                    {content}
                </p>
            ) : null}
        </div>
    );
} );
