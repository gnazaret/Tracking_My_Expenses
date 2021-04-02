import React, { useState, useEffect, useRef } from "react";
// import transactionRouter from "../../controllers/transactions";

const AddTransaction = (props) => {
  const [transaction, setTransaction] = useState([]);
  // const [amount, setAmount] = useState(0);
  const textInput = useRef(null);
  const amountInput = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/tracking");
        const data = await response.json();
        setTransaction(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textValue = textInput.current.value;
    const amountValue = amountInput.current.value;
    try {
      const response = await fetch("/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: textValue,
          amount: amountValue,
        }),
      });
      const data = await response.json();
      setTransaction([...transaction, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {transaction.map((transaction) => {
          return (
            <div key={transaction.id}>
              <h2>{transaction.text}</h2>{" "}
            </div>
          );
        })}
      </div>
      <h3>Add Transactions</h3>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="text">Text</label>
          <input type="text" ref={textInput} placeholder="Enter Transaction" />
        </div>
        <div className="form">
          <label htmlFor="amount">Amount</label> <br />
          (negative - expense, positive - income)
          <input type="number" ref={amountInput} placeholder="Enter Amount" />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
};

export default AddTransaction;
