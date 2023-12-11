import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecomendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecomendations', async (props, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
            },
        });

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('error');
    }
});
