import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirections } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

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

export function ListBox(props: ListBoxProps) {
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

    const optionsClasses = [mapDirectionClass[direction]];

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
                <HListBox.Button as="div" className={popupCls.trigger}>
                    <Button theme="outline" disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
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
