import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/UI/Text';
import { VStack } from '@/shared/UI/Stack';
import { useArticleRecomendationsList } from '../../api/articleRecomendationsApi';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecomendationsList(3);

    // Обработать состояние загрузки и ошибки
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
            />
            <ArticleList
                target="_blank"
                articles={articles}
            />
        </VStack>
    );
});
