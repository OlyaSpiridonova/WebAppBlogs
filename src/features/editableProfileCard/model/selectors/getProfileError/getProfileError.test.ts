import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const error = ValidateProfileError.SERVER_ERROR;
        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('SERVER_ERROR');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
