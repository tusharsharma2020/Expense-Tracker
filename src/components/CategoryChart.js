import React from "react";
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F", "#FFBB28"];

function CategoryChart({expenses}){
    const categoryTotals = {};
    expenses.forEach((exp) => {
        categoryTotals[exp.category]= (categoryTotals[exp.category] || 0) + exp.amount; 
    });

    const data= Object.entries(categoryTotals).map(([key,value])=>({
        name: key,
        value,
    }));
    return(
        <div className="category-chart backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/30 rounded-xl shadow-md p-6 text-white">
            <h2>Spending by Category 📊</h2>
            {data.length>0 ?(
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie 
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry,index)=>(
                                <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            ):(
                <p>No Data to Show yet.</p>
            )}
        </div>
    );
}
export default CategoryChart;