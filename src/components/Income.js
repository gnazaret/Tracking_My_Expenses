import React, { useContext } from "react";
import GlobalContext from "../context/GlobalState";

const Income = () => {
  const [context, reducer] = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => transaction.amount);

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
    </div>
  );
};

export default Income;
