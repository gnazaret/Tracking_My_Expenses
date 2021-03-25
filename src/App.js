import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

import './App.css'


function App() {
  return (
    <div>
     <Header />

     <div className="container">

       <Balance />

       <Income />

       <Transactions />

       <AddTransaction />



     </div>
     
    </div>
  );
}

export default App;
