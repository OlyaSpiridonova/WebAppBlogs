import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.Navbar)}>
            <div className={classNames(style.Navbar__links)}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={style.Navbar__links__item}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                    className={style.Navbar__links__item}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
