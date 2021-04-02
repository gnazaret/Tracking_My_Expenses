import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const [context, reducer] = useContext(GlobalContext);

  const [compras, setCompras] = useState({});

  // const { deleteTransaction }  = useContext(GlobalContext);

  const deleteTransaction = (event, id) => {
    event.preventDefault();
    setCompras(compras.filter((transaction) => transaction.id != id));
  };

  const moneySign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className="minus">
      {transaction.text}{" "}
      <span>
        {moneySign}${Math.abs(transaction.amount)}
      </span>{" "}
      <button
        onClick={(event) => deleteTransaction(event, transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
