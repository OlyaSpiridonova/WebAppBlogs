import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'Ivan', avatar: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg' },
    },
};
export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
