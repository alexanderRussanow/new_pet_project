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

interface TextProps {
    className?: string;
    title?: string;
    content?: string;
    theme?: TextThemeEnum;
    textAlign?: TextAlignEnum;
}

export const Text: React.FC<TextProps> = memo( ( { className, title, content, theme = TextThemeEnum.INFO, textAlign = TextAlignEnum.LEFT } ) => {
    return (
        <div
            className={ classNames(
                classes.text,
                {},
                [
                    className,
                    classes[ theme ],
                    classes[ textAlign ]
                ] 
            ) }>
            {title ? <p className={ classes.title }>{title}</p> : null}
            {content ? <p className={ classes.content }>{content}</p> : null}
        </div>
    );
} );
