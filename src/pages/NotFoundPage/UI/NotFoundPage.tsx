import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(style.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};
