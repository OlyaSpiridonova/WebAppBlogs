import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/UI/Stack';
import { Page } from '@/widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <HStack>
                {t('Главная страница')}
            </HStack>
        </Page>
    );
};

export default MainPage;
