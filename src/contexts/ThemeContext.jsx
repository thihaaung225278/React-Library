import { createContext } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ theme: "light" }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }

