import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfileRating from './ProfileRating';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
        withMock,
    ],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4, feedback: 'feedback' }],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    profileId: '2',
};
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 0, feedback: 'feedback' }],
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    profileId: '3',
};
Orange.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 2, feedback: 'feedback' }],
        },
    ],
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
