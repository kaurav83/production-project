import {
  FC, ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    children,
    isOpen,
    onClose,
  } = props;
  const { t } = useTranslation();

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setClosing] = useState(false);

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

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls['is-closing']]: isClosing,
  };

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
