import React, { useState } from "react";
import { ListIemComponent } from "./components/ListItemComponent";
import { BalanceComponent } from "./components/BalanceComponent";
import { IncomeExpenseComponent } from "./components/IncomeExpenseComponent";

function App() {
  const [income, updateIncome] = useState(0.0);
  const [expense, updateExpense] = useState(0.0);
  const [history, updateHistory] = useState([]);

  const addTransaction = (transactionObj) => {
    let historyList = [...history];
    historyList.push(transactionObj);
    updateHistory(historyList);
    if (transactionObj.amount > 0)
      updateIncome((income) => income + Number(transactionObj.amount));
    else updateExpense((expense) => expense + Number(transactionObj.amount));
  };
  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <BalanceComponent
          balance={income + expense}
          addTransaction={addTransaction}
        />
        <IncomeExpenseComponent income={income} expense={expense} />
        <h3>History</h3>
        {history?.length
          ? history.map((historyObj) => (
              <ListIemComponent transaction={historyObj} />
            ))
          : null}
      </div>
    </>
  );
}

export default App;
