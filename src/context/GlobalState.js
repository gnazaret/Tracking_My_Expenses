import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'



const initialState = {
    transactions: [
        { id: 1, text: 'Comic Books', amount: -40},
        { id: 2, text: 'Groceries', amount: -80},
        { id: 3, text: 'Griddle', amount: -150},
        { id: 4, text: 'Salary', amount: 2000}
    ]
    
}


//Create context

const GlobalContext = createContext(initialState);


//Provider component

const GlobalProvider = ( { children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);


    return (<GlobalContext value={{
        transactions: state.transactions
    }
        
    }>
        {children}
    </GlobalContext>)

}

export default GlobalProvider;
