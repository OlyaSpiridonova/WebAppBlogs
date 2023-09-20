import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import style from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.LoginForm)}>
            <Input type="text" placeholder={t('Введите username')} className={style.input} autofocus />
            <Input type="text" placeholder={t('Введите пароль')} className={style.input} />
            <Button className={style.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
