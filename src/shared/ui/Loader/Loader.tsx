import { FC } from 'react';
import cls from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
// loader props
export interface LoaderProps {
    className?: string;
    size?: LoaderSize;
}

export enum LoaderSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}



export const Loader = (props: LoaderProps) => {
    const { size = LoaderSize.MEDIUM } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
    };
    return (
        <span className={classNames(cls.loader, mods)} />
    );
};
