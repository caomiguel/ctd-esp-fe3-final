import { createContext, useContext, useState, useEffect, useReducer } from "react";

const DentiStates = createContext()

const themes = {
    dark: {
        theme: false,
        bgColor: 'black',
        color: 'white'
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black'
    }
}

const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []
const initialApiState = {dentiList: [], dentiDetail: {}}

const themeReducer = (state, action) => {
    switch(action.type){
        case 'SWITCH_DARK':
            return themes.dark
        case 'SWITCH_LIGHT':
            return themes.light
        default:
            throw new Error
    }
}

const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV': 
            return [...state, action.payload]
        default: 
            throw new Error
    }
}

const apiReducer = (state, action) => {
    switch (action.type){
        case 'GET_DENTISTS':
            return {dentiList: action.payload, dentiDetail: state.dentiDetail}
        case 'GET_DENTIST':
            return {dentiDetail: action.payload, dentiList: state.dentiList}
    }
}

const Context = ({children}) => {

    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)
    const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => apiDispatch({type: 'GET_DENTISTS', payload: data}))
    }, [])

    return(
        <DentiStates.Provider value={{apiState, apiDispatch, themeState, themeDispatch, favState, favDispatch}}>
            {children}
        </DentiStates.Provider>
    )
}

export default Context

export const useDentiStates = () => useContext(DentiStates)