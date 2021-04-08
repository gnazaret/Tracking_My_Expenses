import React, { useContext } from "react";
import Transaction from "./Transaction";
import GlobalContext from "../context/GlobalState";

const Transactions = () => {
  const [context, reducer] = useContext(GlobalContext);

  return (
    <>
      
      <ul className="list">
        <li className="list">
        {context.transactions.map((transaction) => {
          return <Transaction key={transaction._id} transaction={transaction} />;
        })}
        </li>
       
      </ul>
    </>
  );
};

export default Transactions;
