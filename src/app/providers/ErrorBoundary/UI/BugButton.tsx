import { Button } from 'shared/UI/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования обработки ошибок
export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={throwError}>
            {t('throw error')}
        </Button>
    );
};
