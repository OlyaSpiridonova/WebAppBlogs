import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
    title: 'features/ArticleRecomendationsList',
    component: ArticleRecomendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => <ArticleRecomendationsList {...args} />;
const article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 10000,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: 'Article title',
    subtitle: 'Article subtitle',
};
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=6`,
            methods: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],

        },
    ],
};
