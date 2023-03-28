
import { FC, useState } from "react"
import DayNightToggle from 'react-day-and-night-toggle'
import { classNames } from "shared/classNames/classNames"
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
    const [isDarkMode, setIsDarkMode] = useState(false)
    const { theme, toggleTheme } = useTheme()

    function toggleThemeHandler() {
        setIsDarkMode(!isDarkMode)
        toggleTheme()
    }

    return (
        // <button onClick={toggleTheme}>
        //     {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        // </button>
        <DayNightToggle
            onChange={() => toggleThemeHandler()}
            checked={isDarkMode}
        />
    )
}
