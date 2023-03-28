import './styles/index.scss';

// use absolute path 
import { classNames } from '../shared/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Link } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button className="text-3xl font-bold underline" onClick={toggleTheme}>CLick me</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
