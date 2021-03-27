import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';



import './App.css'


function App() {
  return (
    <GlobalProvider>
     <Header />

     <div className="container">

       <Balance />

       <Income />

       <Transactions />

       <AddTransaction />



     </div>
     
     </GlobalProvider>
  );
}

export default App;
