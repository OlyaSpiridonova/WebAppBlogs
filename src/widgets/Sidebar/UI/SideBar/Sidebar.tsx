import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { t } from 'i18next';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(
                style.Sidebar,
                { [style.collapsed]: collapsed },
                [className],
            )}
        >
            <button type="button" onClick={onToggle}>{t('Изменить')}</button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} />
            </div>
        </div>
    );
};
