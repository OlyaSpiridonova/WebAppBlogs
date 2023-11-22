import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import {
    getArticlePageInited,
} from '../../selectors/articlePageSelector';
import { articlePageAction } from '../../slice/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlePageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlePageAction.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageAction.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageAction.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageAction.setType(typeFromUrl));
            }

            dispatch(articlePageAction.initState());
            dispatch(fetchArticleList({}));
        }
    },
);
