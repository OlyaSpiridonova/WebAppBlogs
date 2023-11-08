import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/UI/Text/Text';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/UI/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
        <HStack max justify="between">
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap="8">

                                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t('Отменить')}
                                </Button>

                                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                    {t('Сохранить')}
                                </Button>

                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
};
