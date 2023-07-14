import { type FC, type ReactElement, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
  children?: string | ReactElement
}

export const Sidebar: FC<SidebarProps> = ({ className = '', children }) => {
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
      >
          Toggle
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher className={cls.lang} />
      </div>

      {children}
    </div>
  )
};
