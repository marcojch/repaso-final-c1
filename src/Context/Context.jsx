import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const CharContext = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: true
}

const Context = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    console.log(state)
    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data.results}))
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('favs', JSON.stringify(state.favs))
    // }, [state.favs])

    return (
        <CharContext.Provider value={{state, dispatch}}>
            {children}
        </CharContext.Provider>
    )

}

export default Context

export const useCharContext = () => useContext(CharContext)