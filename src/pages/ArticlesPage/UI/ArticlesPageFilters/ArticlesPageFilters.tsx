import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { Card } from '@/shared/UI/Card';
import { Input } from '@/shared/UI/Input';
import { SortOrder } from '@/shared/types/sort';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/UI/Tabs';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlePageSelector';
import cls from './ArticlesPageFilters.module.scss';
import { articlePageAction } from '../../model/slice/articlePageSlice';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo(
    ({ className }: ArticlesPageFiltersProps) => {
        const { t } = useTranslation('');
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlePageView);
        const sort = useSelector(getArticlePageSort);
        const order = useSelector(getArticlePageOrder);
        const search = useSelector(getArticlePageSearch);
        const type = useSelector(getArticlePageType);

        const fetchData = useCallback(() => {
            dispatch(articlePageAction.setPage(1));
            dispatch(fetchArticleList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlePageAction.setView(view));
            },
            [dispatch],
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlePageAction.setOrder(newOrder));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlePageAction.setSort(newSort));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlePageAction.setSearch(search));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );

        const onChangeType = useCallback(
            (tab: TabItem<ArticleType>) => {
                dispatch(articlePageAction.setType(tab.value));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <div
                className={classNames(cls.ArticlesPageFilters, {}, [className])}
            >
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder={t('Поиск')}
                    />
                </Card>
                <ArticleTypeTabs
                    className={cls.tabs}
                    value={type}
                    onChangeTab={onChangeType}
                />
            </div>
        );
    },
);
