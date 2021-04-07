import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalState";


const Transaction = ({ transaction }) => {
  const [context, reducer] = useContext(GlobalContext);

  

  const moneySign = transaction.amount < 0 ? "-" : "+";
  return (
    
    <div>
      
    <li className="minus">
      
      {transaction.text}{" "}
      <span>
        {moneySign}${Math.abs(transaction.amount)}
      </span>{" "}
      <button className="delete-btn"
      >
        X
      </button>
    </li>
    </div>
  );
};

export default Transaction;
