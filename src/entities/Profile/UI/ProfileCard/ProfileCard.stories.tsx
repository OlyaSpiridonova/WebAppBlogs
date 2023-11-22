import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    data: {
        first: 'Olya',
        lastname: 'Spiridonova',
        city: 'Moscow',
        username: 'Olyaska',
        country: Country.Russia,
        currency: Currency.RUB,
        age: 22,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
