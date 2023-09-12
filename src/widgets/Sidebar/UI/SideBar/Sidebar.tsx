import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
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
            <Button onClick={onToggle}>{t('Изменить')}</Button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} />
            </div>
        </div>
    );
};
