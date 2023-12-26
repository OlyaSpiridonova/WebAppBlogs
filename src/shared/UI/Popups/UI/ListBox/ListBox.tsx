import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirections } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrowDown.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    label?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirections;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        label,
        onChange,
        readonly,
        direction = 'bottomRight',
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItems = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="8">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button
                    as={Button}
                    theme="filled"
                    addonRight={<Icon Svg={ArrowIcon} />}
                >
                    {selectedItems?.content ?? defaultValue}
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items &&
                        items.map((item) => (
                            <HListBox.Option
                                as={Fragment}
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(
                                            cls.item,
                                            {
                                                [popupCls.active]: active,
                                                [popupCls.disabled]:
                                                    item.disabled,
                                            },
                                            [],
                                        )}
                                        key={item.value}
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
