import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const NormalCircle = Template.bind({});
NormalCircle.args = {
    width: 100,
    height: 100,
    border: '50%',
};

export const Dark = Template.bind({});
Dark.args = {
    width: '100%',
    height: 200,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    width: 100,
    height: 100,
    border: '50%',
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    width: '100%',
    height: 200,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeCircle = Template.bind({});
OrangeCircle.args = {
    width: 100,
    height: 100,
    border: '50%',
};
OrangeCircle.decorators = [ThemeDecorator(Theme.ORANGE)];
