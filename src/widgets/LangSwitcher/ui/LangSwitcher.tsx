// import class
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';


interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('');

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const nextLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <div className='component'>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggleLanguage}>
                {t('Язык')}
            </Button>
        </div>
    );
}

