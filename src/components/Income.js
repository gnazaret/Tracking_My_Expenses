import React, { useContext, useEffect, useState } from "react";


const Income = (props) => {
  
  const [transactions, setTransactions] = useState([]);
  const [transactionDelete, setTransactionDelete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/tracking`);
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [transactionDelete]);
  
  const handleDelete = async (e, id) => {
		try {
			const response = await fetch(`/api/tracking/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'aplication/json'
				}
			});
			const data = await response.json();
			setTransactionDelete(!transactionDelete);
		} catch (error) {
			console.error(error);
		} 
	};

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
    <div className="inc-exp-container">
      
      <div>
        <h3>Income</h3>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p className="money minus">{expenses}</p>
      </div> 
     
    </div>
    <div>
    <h2>History</h2>
      {transactions.map((transaction) => {
          return (
            <ul className="list">
              <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction._id}> 
      
      {transaction.text}{" "}
      <span>
        {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
      </span>{" "}
      <button className="delete-btn" onClick={(e) => handleDelete(e , transaction._id)}
      >
        X
      </button>
      
    </li>
            </ul>
            
          );
        })}
    </div>
    </>
  );
};

export default Income;
