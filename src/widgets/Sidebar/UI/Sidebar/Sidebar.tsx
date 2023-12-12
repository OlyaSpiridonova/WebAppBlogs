import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { AppLogo } from '@/shared/UI/AppLogo';
import { HStack, VStack } from '@/shared/UI/Stack';
import { Icon } from '@/shared/UI/Icon';
import ArrowIcon from '@/shared/assets/icons/arrowDown.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <Icon
                data-testid="sidebar-toggle"
                Svg={ArrowIcon}
                onClick={onToggle}
                className={cls.collapseBtn}
                clickable
                width={34}
                height={34}
            />
            <HStack
                gap="16"
                justify="center"
                align="center"
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </aside>
    );
});
