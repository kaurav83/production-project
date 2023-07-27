import { FC } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({ className = '', isOpen, onClose }) => (
  <Modal
    className={classNames('', [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
