import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export const AddTransactionComponent = (props) => {
  return (
    <Dialog open={props.isDialogOpen}>
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Add new transaction
      </DialogTitle>
      <DialogContent>
        <form>
          <div className="input-container">
            <label htmlFor="text">Description</label>
            <input type="text" placeholder="Enter Description" />
          </div>
          <div className="input-container">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" placeholder="Enter Amount" />
          </div>
          <DialogActions>
            <Button color="primary" onClick={props.toggleDialog}> Cancel</Button>
            <Button color="primary" onClick={props.toggleDialog}>Add</Button>
          </DialogActions>{" "}
        </form>
      </DialogContent>
    </Dialog>
  );
};
