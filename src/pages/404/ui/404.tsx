import { FC } from 'react';
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import cls from './404.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage, [className])}>
      {t('notFound')}
    </div>
  )
};