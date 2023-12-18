import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { TabItem } from '@/shared/UI/Tabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import {
    getArticlePageSort,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlePageSelector';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlePageAction } from '../../model/slice/articlePageSlice';

export function useArticleFilters() {
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const view = useSelector(getArticlePageView);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageAction.setView(view));
        },
        [dispatch],
    );

    const fetchData = useCallback(() => {
        dispatch(articlePageAction.setPage(1));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);
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

    return {
        sort,
        order,
        search,
        type,
        view,
        onChangeView,
        onChangeSort,
        onChangeType,
        onChangeOrder,
        onChangeSearch,
    };
}
