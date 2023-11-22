import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        try {
            if (!articleId) {
                throw new Error('Не удалось получить article id');
            }
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
