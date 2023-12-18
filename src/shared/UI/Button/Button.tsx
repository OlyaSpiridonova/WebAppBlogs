import { ButtonHTMLAttributes, ReactElement, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'outline',
        square,
        disabled,
        size = 'size_m',
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
