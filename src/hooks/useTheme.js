import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';

function useTheme(){
    let contexts = useContext(ThemeContext)
    if(contexts == undefined){
        new Error("theme context should be only used in ThemeContextProvider.")
    }
    return contexts;
}

export default useTheme;