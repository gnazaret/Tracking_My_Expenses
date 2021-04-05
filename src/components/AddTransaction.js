import React, { useState, useEffect, useRef } from "react";

// import transactionRouter from "../../controllers/transactions";

const AddTransaction = (props) => {
  const [transactions, setTransactions] = useState([]);
  // const [transactionDelete, setTransactionDelete] = useState(false);
  const textInput = useRef(null);
  const amountInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textValue = textInput.current.value;
    const amountValue = amountInput.current.value;
    const body = JSON.stringify({
      text: textValue,
      amount: amountValue
    })
    try {
      const response = await fetch("http://localhost:8000/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body
        
      });
      const data = await response.json();
      setTransactions([...transactions, data]);
      textInput.current.value = "";
      amountInput.current.value = "";
    } catch (error) {
      console.log(error);
    }
   
  };
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/api/tracking`);
  //       const data = await response.json();
  //       setTransactions(data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })();
  // });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/api/tracking`);
  //       const data = await response.json();
  //       setTransactionDelete(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  // const handleDelete = async e => {
	// 	try {
	// 		const response = await fetch(`http://localhost:8000/api/tracking${props.match.params._id}`, {
	// 			method: 'DELETE',
	// 			headers: {
	// 				'Content-Type': 'aplication/json'
	// 			}
	// 		});
	// 		const data = await response.json();
	// 		setTransactionDelete(!transactionDelete);
	// 	} catch (error) {
	// 		console.error(error);
	// 	} 
	// };

  return (
    <>
      <div>
        {/* {transactions.map((transaction) => {
          return (
            <li className="minus">
      
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
            </span>{" "}
            <button className="delete-btn" onClick={handleDelete}
            >
              X
            </button>
          </li>
          );
        })} */}
      </div>
      
      <h3>Add Transactions</h3>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="text">Text</label>
          <input type="text" ref={textInput} placeholder="Enter Transaction" />
        </div>
        <div className="form">
          <label htmlFor="amount">Amount</label> <br />
          (negative - expense, positive - income)
          <input type="number" ref={amountInput} placeholder="Enter Amount" />
        </div>
        <button className="btn">Add</button>
      </form>
      
    </>
  );
};

export default AddTransaction;
