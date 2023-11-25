import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Заголовок карточки рейтинга',
    feedbackTitle: 'Заголовок обратной связи',
    hasFeedback: true,
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Заголовок карточки рейтинга',
    feedbackTitle: 'Заголовок обратной связи',
    hasFeedback: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    title: 'Заголовок карточки рейтинга',
    feedbackTitle: 'Заголовок обратной связи',
    hasFeedback: true,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
