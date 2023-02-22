import { createContext, useReducer } from "react";


export const ThemeContext = createContext()

//changeColor fires this function
const themeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload}
        default:
            return state
    }
}



//
export function ThemeProvider({children}){
    //Initial state of color set to this
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c'
    })

    //can call this if we want to change colour 
    const changeColor = (color) => {
        dispatch({type: 'CHANGE_COLOR', payload: color})
    }
    


    return (
        <ThemeContext.Provider value={{...state, changeColor}}>
            {/*all children components get access to the value above*/}
            {children}
        </ThemeContext.Provider>
    )
}