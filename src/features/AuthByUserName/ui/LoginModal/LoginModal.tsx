import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../../ui/LoginForm/LoginForm.async';
import { Loader, LoaderSize } from 'shared/ui/Loader/Loader';
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader size={LoaderSize.SMALL} />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
