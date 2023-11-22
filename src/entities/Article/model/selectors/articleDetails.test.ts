import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'Title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return state isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should return state error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Fail',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('Fail');
    });
    test('should work with empry state error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
