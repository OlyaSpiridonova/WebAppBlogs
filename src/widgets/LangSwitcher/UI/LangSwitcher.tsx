import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={changeLanguage}
            className={classNames(style.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t(short ? 'Сокращение' : 'Язык')}
        </Button>
    );
};
