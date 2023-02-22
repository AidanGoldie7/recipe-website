import { createContext, useReducer } from "react";


export const ThemeContext = createContext()

//changeColor fires this function
const themeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload}
        case 'CHANGE_MODE':
            return {...state, mode: action.payload}
        default:
            return state
    }
}



//
export function ThemeProvider({children}){
    //Initial state of color set to this
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })

    //can call this if we want to change colour of nav bar
    const changeColor = (color) => {
        dispatch({type: 'CHANGE_COLOR', payload: color})
    }

    //light and dark mode change
    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload:mode})
    }
    


    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {/*all children components get access to the value above*/}
            {children}
        </ThemeContext.Provider>
    )
}