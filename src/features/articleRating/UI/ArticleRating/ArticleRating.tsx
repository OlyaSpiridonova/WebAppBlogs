import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/UI/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id ?? '',
        articleId,
    });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (startsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: startsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (startsCount: number, feedback?: string) => {
            handleRateArticle(startsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (startsCount: number) => {
            handleRateArticle(startsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет нам улучшить качество',
            )}
            hasFeedback
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
});

export default ArticleRating;
