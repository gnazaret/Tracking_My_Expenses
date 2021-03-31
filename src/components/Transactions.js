import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';

const Transactions = () => {
    const [ context, reducer ] = useContext(GlobalContext);

    console.log(context);

    return (
        <div>
            <h2>History</h2>
            <ul className="list">
               {context.transactions.map((transaction) => {
                     
                     return (<li className="minus">
                     {transaction.text} <span>-$100</span> <button className="delete-btn">X</button>
                 </li>)
               })}
               
            </ul>
        </div>
    )
}

export default Transactions
