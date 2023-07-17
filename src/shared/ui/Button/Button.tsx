import { type ButtonHTMLAttributes, type FC, type ReactElement } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';
import 'app/styles/index.scss';

export enum ThemeButton {
  CLEAR = 'clear',
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = '',
    square,
    size = SizeButton.L,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: size,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, [className], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
