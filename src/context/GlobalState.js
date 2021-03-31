import React, { createContext, useReducer } from 'react';
// import AppReducer from './AppReducer'



// const operations = {
//     transactions: [
//         { id: 1, text: 'Comic Books', amount: -40},
//         { id: 2, text: 'Groceries', amount: -80},
//         { id: 3, text: 'Griddle', amount: -150},
//         { id: 4, text: 'Salary', amount: 2000}
//     ]
    
// }


// //Create context

 const GlobalContext = createContext(null);

export default GlobalContext 

// //Provider component

// const GlobalProvider = ( { children }) => {

    

//     const [ state, dispatch ] = useReducer(AppReducer, operations);


//     return (<GlobalContext.Provider value={{
//         transactions: state.transactions
//     }
        
//     }>
//         {children}
//     </GlobalContext.Provider>)

// }

// export default GlobalProvider;

