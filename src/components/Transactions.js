import React, { useContext } from "react";
import Transaction from "./Transaction";
import GlobalContext from "../context/GlobalState";

const Transactions = () => {
  const [context, reducer] = useContext(GlobalContext);

  return (
    <div>
      <h2>History</h2>
      <ul className="list">
        {context.transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </div>
  );
};

export default Transactions;
