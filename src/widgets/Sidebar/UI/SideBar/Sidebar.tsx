import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ThemeButton } from 'shared/UI/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
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
            data-testid="sidebar"
            className={classNames(
                style.Sidebar,
                { [style.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={style.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
                {' '}

            </Button>
            <div className={style.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.PRIMARY}
                    className={style.item}
                >
                    <MainIcon className={style.icon} />
                    <span className={style.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.PRIMARY}
                    className={style.item}
                >
                    <AboutIcon className={style.icon} />
                    <span className={style.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={style.lang} short={collapsed} />
            </div>
        </div>
    );
};
