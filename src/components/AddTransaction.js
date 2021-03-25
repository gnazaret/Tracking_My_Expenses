import React, { useState } from 'react';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] =  useState(0);



    return (
        <>
            <h3>Add Transactions</h3>
            <form>
                <div className="form">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event) =>  setText(event.target.value)} placeholder="Enter Transaction"/>

                </div>
                <div className="form">
                    <label htmlFor="amount">Amount</label> <br />
                    (negative - expense, positive - income)
                    <input type="number" value={amount} onChange={(event) =>  setAmount(event.target.value)} placeholder="Enter Amount"/>

                </div>
                <button className="btn">Add</button>

            </form>
            
        </>
    )
}

export default AddTransaction
