import { type FC, type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
  children?: string | ReactElement
}

export const Sidebar: FC<SidebarProps> = ({ className = '', children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.sidebar, [className], { [cls.collapsed]: collapsed })}
      data-testid="sidebar"
    >
      <Button
        data-testid="toggle-sidebar"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <ul className={cls.links}>
        <li className={cls['link-wrap']}>
          <AppLink
            to={RoutePath.main}
            theme={AppLinkTheme.SECONDARY}
            className={cls.link}
          >
            <MainIcon className={cls.icon} />

            <span className={cls['text-link']}>
              {t('mainPage')}
            </span>
          </AppLink>
        </li>

        <li className={cls['link-wrap']}>
          <AppLink
            to={RoutePath.about}
            theme={AppLinkTheme.SECONDARY}
            className={cls.link}
          >
            <AboutIcon className={cls.icon} />

            <span className={cls['text-link']}>
              {t('aboutSite')}
            </span>
          </AppLink>
        </li>
      </ul>

      <div className={cls.switchers}>
        <ThemeSwitcher className={cls['theme-btn']} />

        <LangSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>

      {children}
    </div>
  );
};
