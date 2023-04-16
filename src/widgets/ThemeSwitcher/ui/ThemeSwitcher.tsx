import { FC, memo, useState } from 'react';
import DayNightToggle from 'react-day-and-night-toggle';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
// props

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    theme: string;
}

export const ThemeSwitcher: FC = memo(() => {
    const { theme, toggleTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme !== Theme.LIGHT);

    function toggleThemeHandler() {
        setIsDarkMode(!isDarkMode);
        toggleTheme();
    }

    return (
        // <button onClick={toggleTheme}>
        //     {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        // </button>
        <DayNightToggle
            className={cls.themeSwitcher}
            size={30}
            shadows
            onChange={() => toggleThemeHandler()}
            checked={isDarkMode}
            animationInactive={false}
        />
    );
});
