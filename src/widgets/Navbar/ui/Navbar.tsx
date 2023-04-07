import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                size={ButtonSize.M}
                theme={ButtonTheme.CLEAR}
                onClick={() => setIsOpen(true)}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h3>Modal</h3>
                <h3>Modal</h3>
            </Modal>
        </div>
    );
};
