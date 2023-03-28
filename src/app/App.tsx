import './styles/index.scss';

// use absolute path 
import { classNames } from '../shared/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Link } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
