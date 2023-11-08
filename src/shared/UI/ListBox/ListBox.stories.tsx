import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
    { value: 'Value 1', content: 'Content 1' },
    { value: 'Value 2', content: 'Content 1' },
    { value: 'Value 3', content: 'Content 1' },
];

export const Normal = Template.bind({});
Normal.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
};

export const Dark = Template.bind({});
Dark.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Disabled = Template.bind({});
Disabled.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
    readonly: true,
};
