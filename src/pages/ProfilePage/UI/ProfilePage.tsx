import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/UI/Stack';
import { ProfileRating } from '@/features/profileRating';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();
    const authData = useSelector(getUserAuthData);
    const isVisibleRating = authData?.id !== id;

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
                {isVisibleRating && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
