import React from "react";

function ExpenseList({expenses, onEdit, onDelete}){
    return(
        <div className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/30 rounded-xl shadow-md p-6 text-white">
            <h2>Recent Expenses🧾</h2>
            {expenses.length===0?(
                <p>No Expenses yet</p>
            ): (
                <ul>
                    {expenses.map((expense,index)=>(
                        <li key={index} className="expense-item">
                            <div className="expense-details">
                                <strong className="expense-title">{expense.title}</strong><br />
                                <span className="expense-meta">
                                    ₹{expense.amount} | {expense.date} | {expense.category}
                                    <br />
                                </span>
                                <div className="expense-action">
                                    <button onClick={() => onEdit(index)}>Edit</button>
                                    <button onClick={() => onDelete(index)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ExpenseList;