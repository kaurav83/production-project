import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useState,
  useEffect,
  useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    type = 'text',
    value,
    onChange,
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  // @ts-ignore
  const handleSelect = (e) => {};

  return (
    <div className={classNames(cls['input-wrapper'], [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <div className={cls['carriage-wrapper']}>
        <input
          className={cls.input}
          ref={inputRef}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          {...otherProps}
        />
      </div>
    </div>
  );
});
