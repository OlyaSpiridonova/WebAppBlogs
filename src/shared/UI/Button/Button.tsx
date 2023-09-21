import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC } from 'react';
import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED= 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, square, size = ButtonSize.M, disabled, ...otherProps
    } = props;

    const mods = {
        [style.square]: square,
        [style.disabled]: disabled,
    };

    return (
        <button
            className={classNames(style.Button, mods, [className, style[theme], style[size]])}
            type="button"
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
