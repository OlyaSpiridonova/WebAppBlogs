import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Olya',
            lastname: 'Spiridonova',
            city: 'Moscow',
            username: 'Olyaska',
            country: Country.Russia,
            currency: Currency.RUB,
            age: 22,
            avatar: 'https://w7.pngwing.com/pngs/641/941/png-transparent-avatar-face-female-people-profile-user-woman-avatar-user-icon.png',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
