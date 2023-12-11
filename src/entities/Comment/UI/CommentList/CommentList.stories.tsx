import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments = [
    {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'Ivan',
            avatar: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg',
        },
    },
    {
        id: '2',
        text: 'some comment 2',
        user: {
            id: '2',
            username: 'Petr',
            avatar: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg',
        },
    },
    {
        id: '3',
        text: 'some comment 3',
        user: {
            id: '3',
            username: 'Olya',
            avatar: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg',
        },
    },
];

export const Normal = Template.bind({});
Normal.args = {
    comments,
};

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
