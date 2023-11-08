import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropDownDirections } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClass: Record<DropDownDirections, string> = {
    bottomLeft: cls.optionsBottomLeft,
    bottomRight: cls.optionsBottomRight,
    topLeft: cls.optionsTopLeft,
    topRight: cls.optionsTopRight,
};

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[],
    direction?: DropDownDirections;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        trigger,
        items,
        direction = 'bottomRight',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
