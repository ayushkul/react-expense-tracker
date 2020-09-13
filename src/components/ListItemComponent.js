import React from "react";

export const ListIemComponent = (props) => {
    return (
        <div className={'card-view list-item ' + (props.transaction.amount > 0 ? 'green-border' : 'red-border')}>
            <span>{props.transaction?.description}</span>
            <span>{props.transaction?.amount}</span>
        </div>
    )
}
