import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { strict } from 'assert';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('');
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <div className={classNames('', {}, [className])}>
            {isEdit ? t(`Редактирование статьи с ID = ${id}`) : t('Создание новой статьи')}
        </div>
    );
});

export default ArticleEditPage;
