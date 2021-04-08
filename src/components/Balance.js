import React, { useContext, useState, useEffect } from "react";


const Balance = () => {
  
  const [transactions, setTransactions] = useState([]);
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
  }, []);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h2>Your Balance Is</h2>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
