import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

const options = [
    { value: 'Value 1', content: 'Content 1 Content Content Content' },
    { value: 'Value 2', content: 'Content 1 Content Content Content' },
    { value: 'Value 3', content: 'Content 1 Content Content Content' },
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

export const topLeft = Template.bind({});
topLeft.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
    direction: 'topLeft',
};

export const topRight = Template.bind({});
topRight.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
    direction: 'topRight',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
    direction: 'bottomRight',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: options[1].value,
    defaultValue: 'Default value',
    label: 'Label',
    items: options,
    direction: 'bottomLeft',
};
