import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text/Text';
import ViewsIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import { PostTextBlock } from '../PostBlocks/PostTextBlock/PostTextBlock';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Row } from '@/shared/ui/Layout/Row/Row';
import { ContentText, PostType } from '../../model/types/PostType';
import { PostsListViewModeEnum, PostContentTypeEnum } from '../../model/consts/postConsts';
import { RoutesPath } from '@/shared/types/routesPaths';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
// styles
import classes from './PostListItem.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface PostListItemProps {
    post: PostType;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
    viewMode?: PostsListViewModeEnum;
}

export const PostListItem: React.FC<PostListItemProps> = memo( ( { post, target, viewMode, className } ) => {
    const { t } = useTranslation( 'post' );
    const textBlock = post.content.find( block => block.type === PostContentTypeEnum.TEXT ) as ContentText;

    return (
        <div
            data-testid='postListItem'
            className={ classNames(
                classes.PostListItem,
                {},
                [
                    className,
                    classes[ viewMode as string ]
                ] 
            ) }>
            {viewMode === PostsListViewModeEnum.GRID ? (
                <AppLink
                    target={ target }
                    to={ RoutesPath.postDetail + post.id }>
                    <Card className={ classes.card }>
                        <Column
                            align='start'
                            gap='small'>
                            <Row className={ classes.imgWrapper }>
                                <AppImage
                                    alt={ post.title }
                                    className={ classes.img }
                                    src={ post.img }
                                    fallback={ <Skeleton
                                        height={ 200 }
                                        width={ 200 } /> } />
                                <Text
                                    className={ classes.date }
                                    content={ post.date } />
                            </Row>
                            <Row
                                justify='between'
                                width100>
                                <Text
                                    className={ classes.tags }
                                    content={ post.tags.join( ', ' ) } />
                                <Row gap='small'>
                                    <Text content={ String( post.views ) } />
                                    <Icon Svg={ ViewsIcon } />
                                </Row>
                            </Row>
                            <Text
                                className={ classes.title }
                                title={ post.title } />
                        </Column>
                    </Card>
                </AppLink>
            ) : (
                <Card className={ classes.card }>
                    <Column
                        align='start'
                        gap='small'>
                        <Row
                            gap='small'
                            width100>
                            <Avatar
                                size={ 30 }
                                src={ post.user.avatar } />
                            <Text content={ post.user.username } />
                            <Text
                                className={ classes.date }
                                content={ post.date } />
                        </Row>
                        <Text title={ post.title } />
                        <Text content={ post.tags.join( ', ' ) } />
                        <AppImage
                            alt={ post.title }
                            className={ classes.img }
                            src={ post.img }
                            fallback={ <Skeleton
                                height={ 250 }
                                width={ '100%' } /> } />
                        {textBlock ? <PostTextBlock
                            className={ classes.textBlock }
                            content={ textBlock } /> : null}
                        <Row
                            justify='between'
                            width100>
                            <AppLink
                                target={ target }
                                to={ RoutesPath.postDetail + post.id }>
                                <Button theme={ ButtonThemeEnum.OUTLINE }>{t( 'READ_MORE' )}</Button>
                            </AppLink>
                            <Row gap='small'>
                                <Text content={ String( post.views ) } />
                                <Icon Svg={ ViewsIcon } />
                            </Row>
                        </Row>
                    </Column>
                </Card>
            )}
        </div>
    );
} );
