import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/UI/Card';
import { ArticleDetails } from '@/entities/Article';
import { Button } from '@/shared/UI/Button';
import { getRouteArticles } from '@/shared/const/router';
import cls from './DetailsContainer.module.scss';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation('');
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);
    return (
        <Card padding="24" className={className}>
            <Button
                theme="outline"
                onClick={onBackToList}
                className={cls.backBtn}
            >
                {t('Вернуться к списку')}
            </Button>
            <ArticleDetails id={id} />
        </Card>
    );
});
