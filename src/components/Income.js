import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalState";

const Income = (props) => {
  const [context, reducer] = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([]);
  const [transactionDelete, setTransactionDelete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/tracking`);
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.log(error)
      }
    })();
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/tracking${props.match.params._id}`);
        const data = await response.json();
        setTransactionDelete(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const handleDelete = async e => {
		try {
			const response = await fetch(`http://localhost:8000/api/tracking${props.match.params._id}`, {
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
    <div className="income-container">
      
      <div>
        <h3>Income</h3>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p className="money minus">{expenses}</p>
      </div> 
      <h2>History</h2>
      {transactions.map((transaction) => {
          return (
            <li className="minus" key={transaction._id}> 
      
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
            </span>{" "}
            <button className="delete-btn" onClick={handleDelete}
            >
              X
            </button>
            
          </li>
          );
        })}
    </div>
  );
};

export default Income;
