import { ComponentStory, ComponentMeta } from '@storybook/react';
import cls from './Sidebar.module.scss';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = { className: cls.storybookHeight };

export const Dark = Template.bind({});
Dark.args = { className: cls.storybookHeight };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
