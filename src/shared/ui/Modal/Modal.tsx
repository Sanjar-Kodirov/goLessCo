import { FC, ReactNode } from 'react'
import cls from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'


// props 
interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}



const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props

    // mods for classes
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }

    const closeHandler = () => {
        onClose && onClose()
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal