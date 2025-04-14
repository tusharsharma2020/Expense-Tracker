import React, {useState, useEffect} from "react";

function ExpenseForm({onSubmit, editIndex, setEditIndex , expenses}){
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    
    useEffect(()=>{
        if(editIndex!==null){
            const exp =expenses[editIndex];
            setTitle(exp.title);
            setAmount(exp.amount);
            setDate(exp.date);
            setCategory(exp.category);
        }
    },[editIndex,expenses]);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newexp = {title, amount:parseFloat(amount),date,category};
        onSubmit(newexp);
        setTitle("");
        setAmount("");
        setDate("");
        setCategory("");
        setEditIndex(null);
    };
    
    return(
        <div className="backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/30 rounded-xl shadow-md p-6 text-white">
            <h2>{editIndex!==null ? " Edit Expense" : "Add New Expense"}</h2>
            <form onSubmit={handleSubmit}>
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
                <div className="date-category-row">
                    <input
                        type="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        required
                    />
                 
                    <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="Food">🍔 Food</option>
                        <option value="Fuel">⛽ Fuel</option>
                        <option value="Shopping">🛍 Shopping</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                        {/* <option value="Food">Food</option> */}
                    </select>
                </div>
                <button type="Submit">{editIndex!==null ? "Update" : "Add New Expense"}</button>
            </form>
        </div>
    );
}
export default ExpenseForm;