import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h2>{t('Произошла непредвиденная ошибка')}</h2>
            <Button
                className={cls.ErorPageBtn}
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.L}
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
