import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
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

    test('all data is valid', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('incorrect user data', () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect avatar', () => {
        const result = validateProfileData({ ...data, avatar: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });

    test('incorrect city', () => {
        const result = validateProfileData({ ...data, city: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('incorrect username', () => {
        const result = validateProfileData({ ...data, username: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('incorrect data', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AVATAR,
        ]);
    });
});
