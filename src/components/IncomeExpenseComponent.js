import React from "react";


export const IncomeExpenseComponent =()=>{
    return(
        <div className="card-view row income-expense-view">
            <div>
                <h4>Income</h4>
                <p className="income-text-value fc-income">+$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-plus" className="income-text-value fc-expense">
                    +$0.00
                </p>
            </div>
        </div>

    )
}
