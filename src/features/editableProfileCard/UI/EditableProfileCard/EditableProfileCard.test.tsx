import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 20,
    currency: Currency.EUR,
    country: Country.Armenia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://cdn-icons-png.flaticon.com/512/4837/4837857.png',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1', username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/editableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене введенные значения обнуляются', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
    test('Должна появиться ошибка при попытке сохранить пустые инпуты', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации должен выполнится PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
