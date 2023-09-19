import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/UI/Button/Button';
import { Modal } from 'shared/UI/Modal/Modal';
import { useState } from 'react';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev);
    };

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={style.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Modal')}
            </Modal>
        </div>
    );
};
