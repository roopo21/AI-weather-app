import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const THEME_KEY = 'THEME';

function ThemeProvider({children}) {
    const [dark, setDark] = useState(true);

    const saveThemeToLocalStorage = (theme) => {
        localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    } 

    useEffect(()=> {
        const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
        if(savedTheme !== null){
            setDark(savedTheme);
            return;
        }
        //system theme
        const isSystemThemeDark = window.matchMedia('(preferes-color-scheme: dark ').matches;
        setDark(isSystemThemeDark === true);
        // console.log(isSystemThemeDark);
    }, []);
    return (
        <ThemeContext.Provider value={{dark, setDark, saveThemeToLocalStorage }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;