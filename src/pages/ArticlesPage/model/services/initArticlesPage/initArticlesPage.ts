import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageInited,
} from '../../selectors/articlePageSelector';
import { articlePageAction } from '../../slice/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlePageInited(getState());
        if (!inited) {
            dispatch(articlePageAction.initState());
            dispatch(fetchArticleList({
                page: 1,
            }));
        }
    },
);
