import React, { useState } from "react";
import addIcon from "../plus.svg";
import { AddTransactionComponent } from "./AddTransactionComponent";

export const BalanceComponent = (props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen((isDialogOpen) => !isDialogOpen);
  };

  return (
    <div className="row jc-space-between align-center">
      <AddTransactionComponent
        isDialogOpen={isDialogOpen}
        toggleDialog={toggleDialog}
        addTransaction={props.addTransaction}
      />
      <div className="column">
        <h4>BALANCE</h4>
        <h1 id="balance">${props.balance}</h1>
      </div>
      <img
        src={addIcon}
        style={{ width: "32px", height: "32px", cursor: "pointer" }}
        alt="add"
        onClick={toggleDialog}
      />
    </div>
  );
};
