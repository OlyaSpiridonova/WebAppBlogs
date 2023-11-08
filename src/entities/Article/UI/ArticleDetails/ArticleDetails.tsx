import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/UI/Text/Text';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { HStack, VStack } from 'shared/UI/Stack';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <VStack justify="center" max gap="16">
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </HStack>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={String(article?.createdAt)} />
                </HStack>
                <VStack align="center" gap="16">
                    {article?.blocks.map(renderBlock)}
                </VStack>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
