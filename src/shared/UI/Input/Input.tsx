import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> // Для избежания кофликтов типов, вторым аргументом передаются те типы, которое нужно исключить

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        placeholder,
        autofocus,
        value,
        onChange,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(style.inputWrapper)}>
            {placeholder && (
                <div className={style.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={style.caretWrapper}>
                <input
                    ref={ref}
                    className={style.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && <span className={style.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
