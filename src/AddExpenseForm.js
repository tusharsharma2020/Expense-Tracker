import React from "react";
function AddExpenseForm({
    title,
    amount,
    date,
    category,
    setTitle,
    setAmount,
    setDate,
    setCategory,
    isEditing,
    handleSubmit,
}) {
    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEditing ? "Edit Expense" : "Add New Expense"}</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                required
            />
            <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Fuel">Fuel</option>
                <option value="Clothes">Clothes</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
                {/* <option value="Food">Food</option> */}
            </select>
            <button type="Submit">{isEditing ? "Update" : "Add New Expense"}</button>
        </form>
    );
}
export default AddExpenseForm;