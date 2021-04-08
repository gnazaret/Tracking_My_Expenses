import React, { useReducer } from "react";
import PieChart from "./components/PieChart";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Income from "./components/Income";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import GlobalContext from "./context/GlobalState";
import AppReducer from "./context/AppReducer";


import "./App.css";
// const operations = {
//   transactions: [
//     // { id: 1, text: "Comic Books", amount: -40 },
//     // { id: 2, text: "Groceries", amount: -80 },
//     // { id: 3, text: "Griddle", amount: -150 },
//     // { id: 4, text: "Salary", amount: 2000 },
//   ],
// };

function App() {
  
  // const [state, reducer] = useReducer(AppReducer, operations);

  // const [state2, dispatch] = useReducer(AppReducer, operations);

  // const deleteTransaction = (id) => {
  //   dispatch({
  //     type: "DELETE_TRANSACTION",
  //     payload: id,
  //   });
  // };

  return (
    <div>
      <Header />
     

      <div className="container">
      <PieChart />
        <Balance />

        <Income />
       
        {/* <Transactions /> */}
        
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
