import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  views?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        views = ArticleView.SMALL,
    } = props;

    const getSkeletons = (views: ArticleView) => (
        new Array(views === ArticleView.SMALL ? 9 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton className={cls.card} key={index} view={views} />
            ))
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[views]])}>
                {getSkeletons(views)}
            </div>
        );
    }

    const renderArticles = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={views}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[views]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticles)
                    : null
            }
        </div>
    );
});
