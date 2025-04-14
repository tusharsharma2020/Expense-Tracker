import React, {useState, useEffect, useContext} from "react";
// this is gonna a be an expense tracker app

// import AddExpenseForm from "./AddExpenseForm";
import './App.css';
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import SummaryCard from "./components/SummaryCard";
import ExpenseList from "./components/ExpenseList";
import CategoryChart from "./components/CategoryChart";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeContext } from "./components/ThemeContext";
import toast, { Toaster } from "react-hot-toast";
import { DefaultLegendContent } from "recharts";


function App() {
  const [expenses , setExpenses] = useState([]);
  // const [title , setTitle] = useState("");
  // const [amount , setAmount] = useState("");
  // const [date , setDate] = useState("");
  // const [isEditing, setISEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  // const [category, setCategory] = useState("");
  const {darkMode} =useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");



  useEffect(()=>{ // this useEffect is used to load data from loacal storage when app first runs
    const savedExpenses = JSON.parse(localStorage.getItem("Expenses")) || [];
    setExpenses(savedExpenses);
  },[]);

  useEffect(()=>{ // this is used to save data everytime add expenses button is clicked.
    localStorage.setItem("Expenses", JSON.stringify(expenses));
  },[expenses]);

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode]);

  const handleAddExpense =(expense)=>{
    if(editIndex!==null){
      const updated = [...expenses];
      updated[editIndex]= expense;
      setExpenses(updated);
      setEditIndex(null);
      toast.success("Expense updated");
      
    }
    else{
      setExpenses([...expenses, expense]);
      toast.success("Expense Added!");
    }
  };
  const handleEdit = (index)=>{ // Update operation of CRUD
    // const item = expenses[index];
    // setTitle(item.title);
    // setAmount(item.amount);
    // setDate(item.date);
    setEditIndex(index);
    // setISEditing(true);
  }
  const handleDelete = (index) =>{  // delete operation of CRUD
    const filtered = expenses.filter((_, i)=> i!==index); 
    setExpenses(filtered);
    if(editIndex===index) setEditIndex(null);
    toast.success("expense deleted!");
  };
  const filteredAndSortedExpenses = [...expenses]
    .filter((exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase())||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a,b) =>
      sortBy==="amount" ? b.amount-a.amount : new Date(b.date) - new Date (a.date)
    );

  return (
    <div className="main-container bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Header/>
      <DarkModeToggle/>
      <Toaster position="top-right" reverseOrder={false}/>
      {/* <h1>Expense Tracker Dashboard</h1> */}
      <div className="dashboard">
        <div className="form-section">
          <ExpenseForm
            onSubmit={handleAddExpense}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            expenses= {expenses}
          />
        
        </div>
        <div className="expense-section backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/30 rounded-xl shadow-md p-6 text-white">
          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="w-full md:w-1/2 mb-4 p-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white"
          >
            <option value="date">Sort By Date</option>
            <option value="amount">Sort By Amount</option>
          </select>
          <input
            type="text"
            placeholder="Search by title or category"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 mb-4 p-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white"
          />
          
          <ExpenseList
            expenses={filteredAndSortedExpenses}
            onEdit= {handleEdit}
            onDelete={handleDelete}

          />
        </div>
      </div> 
      <div className="Chart-Summary">
        <SummaryCard expenses={expenses}/>
        <CategoryChart expenses={expenses}/>
      </div>
    </div>
  );
}
export default App ;