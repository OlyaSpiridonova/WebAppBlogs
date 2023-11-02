import { getQueryParams } from './addQueryParams';

describe('add query params', () => {
    test('with only first param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('with two params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'secondValue',
        });
        expect(params).toBe('?test=value&second=secondValue');
    });
    test('with two params undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
