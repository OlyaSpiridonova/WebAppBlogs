import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/UI/Text/Text';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

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
        <div className={classNames(cls.ProfilePageHeader)}>
            <Text title={t('Профиль')} />

            {readonly
                ? (
                    <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>

                        <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>

                        <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>

                    </>
                )}

        </div>
    );
};
