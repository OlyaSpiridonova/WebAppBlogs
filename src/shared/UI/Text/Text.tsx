import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'size_s' | 'size_m' | 'size_l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    size_s: 'h1',
    size_m: 'h2',
    size_l: 'h3',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = 'primary',
        align = 'left',
        size = 'size_m',
        'data-testid': dataTestId = 'Text',
        bold,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const additionalClasses = [className, cls[theme], cls[align], cls[size]];

    return (
        <div
            className={classNames(
                cls.Text,
                { [cls.bold]: bold },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
