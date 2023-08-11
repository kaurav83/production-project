import { memo, ButtonHTMLAttributes, ReactElement } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';
import 'app/styles/index.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum SizeButton {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: string | ReactElement
  theme?: ThemeButton
  square?: boolean;
  size?: string;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    theme = '',
    square,
    size = SizeButton.M,
    disabled,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: size,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, [className], mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
