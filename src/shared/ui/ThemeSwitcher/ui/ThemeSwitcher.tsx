
import { type FC } from 'react'

import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/classNames/classNames'

import { Button, ThemeButton } from 'shared/ui/Button/Button'
import LightIcon from 'shared/assets/icons/light-theme.svg'
import DarkIcon from 'shared/assets/icons/dark-theme.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = ''}) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK
        ? <DarkIcon />
        : <LightIcon />
      }
    </Button>
  )
}
