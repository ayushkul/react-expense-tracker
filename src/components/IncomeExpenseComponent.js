import React from "react";


export const IncomeExpenseComponent =(props)=>{
    return(
        <div className="card-view row income-expense-view">
            <div>
                <h4>Income</h4>
                <p className="income-text-value fc-income">+$ {props.income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-plus" className="income-text-value fc-expense">
                    +$ {props.expense}
                </p>
            </div>
        </div>

    )
}
