import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (state: StateSchema) => state.articlePage?.view;
