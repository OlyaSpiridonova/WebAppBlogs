import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const row = Template.bind({});
row.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
};

export const column = Template.bind({});
column.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    direction: 'column',
};

export const rowGap4 = Template.bind({});
rowGap4.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    gap: '4',
};

export const rowGap8 = Template.bind({});
rowGap8.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    gap: '8',
};

export const rowGap16 = Template.bind({});
rowGap16.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    gap: '16',
};

export const columnAlignCenter = Template.bind({});
columnAlignCenter.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    direction: 'column',
    justify: 'center',
    gap: '16',
};

export const rowJustifyCenter = Template.bind({});
rowJustifyCenter.args = {
    children: (
        <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>

        </>
    ),
    justify: 'center',
    gap: '16',
};
