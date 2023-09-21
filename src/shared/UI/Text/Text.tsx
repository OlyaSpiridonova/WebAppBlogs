import { classNames } from 'shared/lib/classNames/classNames';
import style from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
}

export const Text = (props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(style.Text, {}, [className, style[theme]])}>
            {title && <p className={style.title}>{title}</p>}
            {text && <p className={style.text}>{text}</p>}
        </div>
    );
};
