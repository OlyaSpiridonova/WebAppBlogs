import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Link Light',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Link Dark',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Link Primary',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link Primary',
    theme: AppLinkTheme.PRIMARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Link Primary',
    theme: AppLinkTheme.PRIMARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Link Primary',
    theme: AppLinkTheme.SECONDARY,
};
