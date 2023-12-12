import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/UI/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getCanEditAricle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation('');
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditAricle);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [navigate, article]);

        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme="outline" onClick={onBackToList}>
                    {t('Вернуться к списку')}
                </Button>
                {canEdit && (
                    <Button
                        className={cls.ediBtn}
                        theme="outline"
                        onClick={onEditArticle}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        );
    },
);
