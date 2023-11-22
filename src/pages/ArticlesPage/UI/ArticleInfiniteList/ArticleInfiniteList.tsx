import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlePageSlice';
import { Text } from '@/shared/UI/Text/Text';
import {
    getArticlePageError, getArticlePageIsLoading, getArticlePageView,
} from '../../model/selectors/articlePageSelector';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const [searchParams] = useSearchParams();
    const error = useSelector(getArticlePageError);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Text title={t('Произошла ошибка при загрузке статей')} />
        );
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
});
