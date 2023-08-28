import {
  FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback, MutableRefObject,
} from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    children,
    isOpen,
    onClose,
    lazy,
  } = props;
  const { t } = useTranslation();
  const { theme = '' } = useTheme();

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const [isClosing, setClosing] = useState(false);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
      setClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const handleContentClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const mods: Record<string, boolean | string | undefined> = {
    [cls.opened]: isOpen,
    [cls['is-closing']]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, [className], mods)}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
