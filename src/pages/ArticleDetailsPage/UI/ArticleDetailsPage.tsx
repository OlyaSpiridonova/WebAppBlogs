import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/UI/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import {
    getArticleRecomendations,
} from '../model/slice/articleDetailsRecomendationsSlice';
import { getArticleRecomendationsError, getArticleRecomendationsIsLoading } from '../model/selectors/recomendations';
import { fetchArticleRecomendations } from '../model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { articleDetailsPageReducer } from '../model/slice';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);
    const recomendations = useSelector(getArticleRecomendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const recomendationsError = useSelector(getArticleRecomendationsError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecomendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage)}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage)}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('Вернуться к списку')}</Button>
                <ArticleDetails id={id} />
                <Text
                    title={t('Рекомендуем')}
                    className={cls.recomendationsTitle}
                />
                <ArticleList
                    target="_blank"
                    articles={recomendations}
                    isLoading={recomendationsIsLoading}
                    className={cls.recomendations}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <Text
                    title={t('Комментарии')}
                    className={cls.commentTitle}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
