import React from "react";

function SummaryCard({expenses}){
    const total =expenses.reduce((acc,exp)=>acc + exp.amount, 0);
    const categories = {};
    expenses.forEach((exp) => {
        if(!categories[exp.category]){
            categories[exp.category] = exp.amount;
        }
        else{
            categories[exp.category] += exp.amount;
        }
    }); 
    return(
        <div className="summary-card backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/30 rounded-xl shadow-md p-6 text-white">
            <h2>Monthly Total 💰</h2>
            <p><strong>Total :</strong> ₹{total} </p>

            <div className="category-breakdown">
                {Object.entries(categories).map(([cat,amt]) => (
                    <p key={cat} className="text-gray-800 dark:text-gray-200">
                        <span className="font-semibold">{cat}:</span> ₹ {amt}
                    </p>
                ))}
            </div>
        </div>
    );
}
export default SummaryCard;