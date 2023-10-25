import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageHasMore, getArticlePageIsLoading, getArticlePageNum } from '../../selectors/articlePageSelector';
import { articlePageAction } from '../../slice/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageIsLoading(getState());
        const page = getArticlePageNum(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageAction.setPage(page + 1));
            dispatch(fetchArticleList({}));
        }
    },
);
