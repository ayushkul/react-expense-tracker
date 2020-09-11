import React from "react";
import addIcon from "../plus.svg";

export const BalanceComponent = (props) => {
  return (
    <div className="row jc-space-between align-center">
      <div className="column">
        <h4>BALANCE</h4>
        <h1 id="balance">$0.00</h1>
      </div>
      <img src={addIcon} style={{width:'32px', height:'32px',cursor:"pointer"}} alt="add" onClick={props.toggleDialog}/>
    </div>
  );
};
