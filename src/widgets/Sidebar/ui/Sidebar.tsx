import { ReactElement, memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarItem } from './SidebarItem';
import { SidebarItemsList } from '../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
  children?: string | ReactElement
}

export const Sidebar = memo(({ className = '', children }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <li className={cls['link-wrap']} key={item.path}>
            <SidebarItem
              item={item}
              collapsed={collapsed}
            />
          </li>
        ))}
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
});
