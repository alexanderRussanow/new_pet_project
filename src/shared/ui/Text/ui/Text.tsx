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
}

export enum TextSizeEnum {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface TextProps {
    className?: string;
    title?: string;
    content?: string;
    theme?: TextThemeEnum;
    size?: TextSizeEnum;
    textAlign?: TextAlignEnum;
}

export const Text: React.FC<TextProps> = memo( ( { className, title, content, theme = TextThemeEnum.INFO, textAlign = TextAlignEnum.LEFT, size = TextSizeEnum.MEDIUM } ) => {
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
            {title ? <p className={ classes.title }>{title}</p> : null}
            {content ? <p className={ classes.content }>{content}</p> : null}
        </div>
    );
} );
