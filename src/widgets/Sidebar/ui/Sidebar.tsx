import { FC, ReactElement, useState } from "react";

import { classNames } from "shared/classNames/classNames";

import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from './Sidebar.module.scss';


interface SidebarProps {
  className?: string;
  children?: string | ReactElement;
}

export const Sidebar: FC<SidebarProps> = ({ className, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={classNames(cls.sidebar, [className], {[cls.collapsed]: collapsed})}>
      <button onClick={onToggle}>Toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>

      {children}
    </div>
  )
};