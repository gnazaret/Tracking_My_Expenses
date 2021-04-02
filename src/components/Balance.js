import React, { useContext } from "react";
import GlobalContext from "../context/GlobalState";

const Balance = () => {
  const [context, reducer] = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h2>Your Balance Is</h2>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
