import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';

const Transactions = () => {
    const context = useContext(GlobalContext);

    console.log(context);

    return (
        <div>
            <h2>History</h2>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$100</span> <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default Transactions
