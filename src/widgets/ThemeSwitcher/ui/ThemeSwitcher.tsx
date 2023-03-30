
import { FC, useState } from "react"
import DayNightToggle from 'react-day-and-night-toggle'
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from "app/providers/ThemeProvider"
// props
import LightIcon from 'shared/assets/icons/earth-light.svg'
import DarkIcon from 'shared/assets/icons/earth-dark.svg'

interface ThemeSwitcherProps {
    className?: string;
    theme: string;
}

export const ThemeSwitcher: FC = () => {
    const { theme, toggleTheme } = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(theme == Theme.LIGHT ? false : true)

    function toggleThemeHandler() {
        setIsDarkMode(!isDarkMode)
        toggleTheme()
    }

    return (
        // <button onClick={toggleTheme}>
        //     {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        // </button>
        <DayNightToggle
            size={30}
            shadows={true}
            onChange={() => toggleThemeHandler()}
            checked={isDarkMode}
            animationInactive={false}
        />
    )
}
