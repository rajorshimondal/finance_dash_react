import { transactions } from "../../data/mockdata";
import { ResponsiveContainer , PieChart , Pie, }  from "recharts";


const categoryChart = (transactions) => {
    const categoryData = {};


    transactions.forEach( (t) => {
        if(t.type === "expense") { 
            // then
            categoryData[t.category] = (categoryData [t.category] || 0) + t.amount; 
        }
    });

    const data = Object.keys(categoryData).map((key) => ({
        name : key,
        value : categoryData[key]
    }));


    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#ff1313"];

    return (
        <div style={{
            flex:1, 
            padding: "20px",
            color: "#fff",
            background: "#4a4a62",
            borderRadius: "10px"
        }}>
            <h4>Spending Breakdown</h4>
            <ResponsiveContainer>
                <PieChart width={400} height={300}>
                <Pie dataKey="value" data={data} fill="#8884d8" label>
                    {data.map((entry , index) => {
                        <path key = {`slice. ${index}`} fill = {COLORS[index % COLORS.length]} />
                    })}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
export default categoryChart;