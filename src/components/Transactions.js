import React from 'react'

const Transactions = () => {
    return (
        <div>
            <h2>History</h2>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span> <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default Transactions
