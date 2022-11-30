import { ContentCode } from 'entities/Post';
import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import CopyIcon from '../../../../shared/assets/icons/copy-20-20.svg';
// styles
import classes from './PostCodeBlock.module.scss';

export interface PostCodeBlockProps {
    content?: ContentCode;
    className?: string;
}

export const PostCodeBlock: React.FC<PostCodeBlockProps> = memo( ( { content, className } ) => {
    const copyToClipboard = ( text: string ) => {
        navigator.clipboard.writeText( text );
    };

    return (
        <pre
            className={ classNames(
                classes.PostCodeBlock,
                {},
                [
                    className
                ] 
            ) }>
            <Button
                className={ classes.copyBtn }
                onClick={ () => copyToClipboard( content?.code || '' ) }>
                <Icon Svg={ CopyIcon } />
            </Button>
            <code>{content?.code}</code>
        </pre>
    );
} );
