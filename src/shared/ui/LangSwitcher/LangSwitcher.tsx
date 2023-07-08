import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import { Button, ThemeButton } from '../Button/Button'

interface LangSwitcherProps {
  className: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('lang-switcher', [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('translate')}
    </Button>
  )
}
