import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/UI/Stack';
import { Text } from '@/shared/UI/Text/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames('')}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
