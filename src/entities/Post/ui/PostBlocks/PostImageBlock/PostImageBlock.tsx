import { ContentImage } from '../../../model/types/PostType';
import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Text, TextAlignEnum, TextSizeEnum } from '@/shared/ui/Text';
// styles
import classes from './PostImageBlock.module.scss';

export interface PostImageBlockProps {
    content?: ContentImage;
    className?: string;
}

export const PostImageBlock: React.FC<PostImageBlockProps> = memo( ( { content, className } ) => {
    return (
        <div
            className={ classNames(
                classes.PostImageBlock,
                {},
                [
                    className
                ] 
            ) }>
            <img
                alt={ content?.alt }
                src={ content?.src } />
            {content?.title ? <Text
                content={ content.title }
                size={ TextSizeEnum.SMALL }
                textAlign={ TextAlignEnum.CENTER } /> : null}
        </div>
    );
} );
