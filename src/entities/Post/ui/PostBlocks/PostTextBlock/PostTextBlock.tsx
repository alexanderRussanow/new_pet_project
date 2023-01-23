
import { ContentText } from '../../../model/types/PostType';
import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text } from 'shared/ui/Text';
// styles
import classes from './PostTextBlock.module.scss';

export interface PostTextBlockProps {
    content?: ContentText;
    className?: string;
}

export const PostTextBlock: React.FC<PostTextBlockProps> = memo( ( { content, className } ) => {
    return (
        <div
            className={ classNames(
                classes.PostTextBlock,
                {},
                [
                    className
                ] 
            ) }>
            {content?.title ? <Text
                className={ classes.title }
                title={ content.title } /> : null}
            {content?.text && content.text.map( ( text, index ) => <Text
                className={ classes.text }
                content={ text }
                // eslint-disable-next-line react/no-array-index-key
                key={ index } /> )}
        </div>
    );
} );
