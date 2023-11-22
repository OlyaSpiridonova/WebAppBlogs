import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../../selectors/articlePageSelector';

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articlePage/fetchArticleList',
    async (_, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI;
        const page = getArticlePageNum(getState());
        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? null : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
