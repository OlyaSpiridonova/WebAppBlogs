import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropDownDirections = 'top' | 'bottom';

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    label?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirections;
}

const mapDirectionClass: Record<DropDownDirections, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props:ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        label,
        onChange,
        readonly,
        direction = 'bottom',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >

                <HListBox.Button
                    as="div"
                    className={cls.trigger}
                >
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items && items.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    { [cls.active]: active, [cls.disabled]: item.disabled },
                                    [],
                                )}
                                >
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
