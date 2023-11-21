import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country/model/types/country';
import { ListBox } from 'shared/UI/Popups/UI/ListBox/ListBox';
import cls from './CurrencySelect.module.scss';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },

];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            onChange={onChangeHandler}
            items={options}
            readonly={readonly}
        />
    );
});
