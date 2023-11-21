import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from 'shared/UI/Popups';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottomLeft"
            trigger={<Avatar src={authData.avatar} size={30} />}
            items={[
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                ...(
                    isAdminPanelAvailable ? [{ content: t('Админка'), href: RoutePath.admin_panel }] : []
                ),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
