import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./ThemeContext"


interface ThemeProviderProps {
    children: React.ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)
    
 
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider