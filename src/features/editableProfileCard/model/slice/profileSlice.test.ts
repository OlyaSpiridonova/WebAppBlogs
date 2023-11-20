import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
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
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit,
        )).toEqual({
            readonly: true,
            form: state.data,
            validateError: undefined,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'Profile' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile(
                { username: 'Profile123' },
            ),
        )).toEqual({
            form: { username: 'Profile123' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            form: data,
            readonly: true,
            data,
        });
    });
});
