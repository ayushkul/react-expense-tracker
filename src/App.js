import React, { useState } from "react";
import { ListIemComponent } from "./components/ListItemComponent";
import { AddTransactionComponent } from "./components/AddTransactionComponent";
import { BalanceComponent } from "./components/BalanceComponent";
import { IncomeExpenseComponent } from "./components/IncomeExpenseComponent";

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => {
    setDialogOpen(isDialogOpen=>!isDialogOpen);
  };

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <BalanceComponent toggleDialog={toggleDialog} />
        <IncomeExpenseComponent />
        <AddTransactionComponent
          isDialogOpen={isDialogOpen}
          toggleDialog={toggleDialog}
        />
        <h3>History</h3>
        <ListIemComponent />
      </div>
    </>
  );
}

export default App;
