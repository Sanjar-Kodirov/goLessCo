// import class
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import translation from 'shared/assets/icons/languages.png';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        const currentLanguage = i18n.language;
        const nextLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <div className="component">
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                <div className={cls.lang}>
                    <img src={translation} alt="icon" />
                    {t(short ? 'Короткий язык' : 'Язык')}
                </div>
            </Button>
        </div>
    );
};
