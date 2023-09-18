import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.Navbar)}>
            <div className={classNames(style.Navbar__links)} />
        </div>
    );
};
