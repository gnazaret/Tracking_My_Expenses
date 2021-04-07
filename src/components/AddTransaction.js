import React, { useState, useEffect, useRef } from "react";


const AddTransaction = (props) => {
  const [transactions, setTransactions] = useState([]);
  const textInput = useRef(null);
  const amountInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textValue = textInput.current.value;
    const amountValue = amountInput.current.value;
    const body = JSON.stringify({
      text: textValue,
      amount: amountValue
    })
    try {
      const response = await fetch("http://localhost:8000/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body
        
      });
      const data = await response.json();
      setTransactions([...transactions, data]);
      textInput.current.value = "";
      amountInput.current.value = "";
    } catch (error) {
      console.log(error);
    }
   
  };
  
  return (
    <>
      
      <h3>Add Transactions</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" ref={textInput} placeholder="Enter Transaction" />
        </div>
        <div className="form">
          <label htmlFor="amount">Amount</label> <br />
          
          <input type="number" ref={amountInput} placeholder="Enter Amount" />
        </div>
        <button className="btn">Add</button>
      </form>
      
    </>
  );
};

export default AddTransaction;
