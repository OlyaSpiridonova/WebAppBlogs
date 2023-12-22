import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Text } from '@/shared/UI/Text';
import { Button } from '@/shared/UI/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/UI/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Card } from '@/shared/UI/Card';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({
    className,
}: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <Card padding="24" fullWidth>
            <HStack max justify="between">
                <Text title={t('Профиль')} />
                {canEdit && (
                    <div>
                        {readonly ? (
                            <Button
                                theme="outline"
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme="outline"
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                    color="error"
                                >
                                    {t('Отменить')}
                                </Button>

                                <Button
                                    theme="outline"
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                    color="success"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        </Card>
    );
};
