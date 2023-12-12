import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: 'outline',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: 'outline',
    size: 'size_l',
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: 'outline',
    size: 'size_xl',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: 'clear',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: 'clear',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: 'clear',
    square: true,
    size: 'size_l',
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: 'outline',
    square: true,
    size: 'size_xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: 'outline',
    disabled: true,
};
