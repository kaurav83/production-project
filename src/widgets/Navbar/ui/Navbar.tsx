import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('mainPage')}</AppLink>

        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('aboutSite')}</AppLink>
      </div>
    </div>
  )
};
