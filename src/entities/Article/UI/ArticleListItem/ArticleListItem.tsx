import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/UI/Text';
import { Icon } from '@/shared/UI/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/UI/Card';
import { Avatar } from '@/shared/UI/Avatar';
import { Button } from '@/shared/UI/Button';
import { AppLink } from '@/shared/UI/AppLink';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import {
    ArticleBlockType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/UI/AppImage';
import { Skeleton } from '@/shared/UI/Skeleton';
import { HStack, VStack } from '@/shared/UI/Stack';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article-details');
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} width={32} height={32} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                fullWidth
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        <Avatar size={32} src={article.user.avatar} />
                        <Text text={article.user.username} bold />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size="size_s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack justify="between" max>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button theme="outline">{t('Читать далее')}</Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        className={cls.image}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
