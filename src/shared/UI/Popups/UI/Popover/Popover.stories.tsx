import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    children: <Button>Menu</Button>,
    direction: 'bottomLeft',
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Open</Button>,
    children: <Button>Menu</Button>,
    direction: 'bottomLeft',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    trigger: <Button>Open</Button>,
    children: <Button>Menu</Button>,
    direction: 'bottomLeft',
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
