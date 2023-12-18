import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/UI/AppLink';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebarItem';
import cls from './SidebarItem.module.scss';
import { Icon } from '@/shared/UI/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            variant="primary"
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} width={20} height={20} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
