import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useCallback } from 'react';
import { Select } from 'shared/UI/Select/Select';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/UI/Popups/UI/ListBox/ListBox';
import cls from './CurrencySelect.module.scss';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },

];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            onChange={onChangeHandler}
            items={options}
            readonly={readonly}
        />
    );
});
