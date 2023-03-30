import './styles/index.scss';

// use absolute path 
import { classNames } from '../shared/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Link } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const Component = () => {
    const { t, i18n } = useTranslation('');

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const nextLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(nextLanguage);
    };

    return (
        <div className='component'>
            <button onClick={toggleLanguage} >{t('Перевод')}</button>
            <h1>{t('Тестовый пример')}</h1>
        </div>
    );
};

const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={'Loading...'} >
                <Component />
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
