import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecomendationsReducer } from './articleDetailsRecomendationsSlice';
import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recomendations: articleDetailsPageRecomendationsReducer,
    comments: ArticleDetailsCommentsReducer,
});
