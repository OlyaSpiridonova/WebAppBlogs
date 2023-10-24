import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList.ts');

describe('initArticlesPage.test', () => {
    test('reducer inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });

    test('reducer not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toBeCalledWith({ page: 1 });
    });
});
