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
  view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const getSkeletons = (view: ArticleView) => (
        new Array(view === ArticleView.SMALL ? 9 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
            ))
    );

    const renderArticles = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticles)
                    : null
            }
            {isLoading && getSkeletons(view) }
        </div>
    );
});
