import { createContext, useContext, useState, useEffect } from "react";

const DentiStates = createContext()

const Context = ({children}) => {
    const [dentiList, setDentiList] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setDentiList(data))
    }, []);

    return (
        <DentiStates.Provider value={{dentiList, setDentiList}}>
            {children}
        </DentiStates.Provider>
    )
}

export default Context

export const useDentiStates = () => useContext(DentiStates)