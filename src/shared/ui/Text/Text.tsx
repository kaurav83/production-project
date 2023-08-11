import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  description?: string;
  title?: string;
  theme?: TextTheme;
}

export const Text = memo((props: TextProps) => {
  const {
    className = '',
    title,
    description,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.text, [className], { [cls[theme]]: true })}>
      {title && (
        <p className={cls.title}>
          {title}
        </p>
      )}

      {description && (
        <p className={cls.description}>
          {description}
        </p>
      )}
    </div>
  );
});
