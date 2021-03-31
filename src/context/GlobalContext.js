import React, { createContext } from 'react';


const GlobalContext = () => {

    const operations = {
        transactions: [
            { id: 1, text: 'Comic Books', amount: -40},
            { id: 2, text: 'Groceries', amount: -80},
            { id: 3, text: 'Griddle', amount: -150},
            { id: 4, text: 'Salary', amount: 2000}
        ]
        
    }
    
    
    //Create context
    
    const GlobalContext = createContext(operations);
    return (
        <>
        </>
    )
}

export default GlobalContext;
