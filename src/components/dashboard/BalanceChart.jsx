import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { transactions } from "../../data/mockdata";

const balanceChart = (transactions) => {
    let runningBalance = 0;

    const data = transactions
    .sort((a,b) => new Date(a.date) - new Date(b.date))
    .map((t) => {
            if(t.type === "income") {
                runningBalance = runningBalance + t.amount;
            } 
            else {
                runningBalance = runningBalance - t.amount;
            };
            return {
                date: t.date,
                balance : runningBalance
            };
    });

    return (
        <div style={{
            flex:1, 
            padding: "20px",
            color: "#fff",
            background: "#4a4a62",
            borderRadius: "10px"
        }}>
            <h4>Balance Trends</h4>
            <LineChart width={400} height={300}>
            <XAxis dataKey="data"/>
            <CartesianGrid/>
            <YAxis/>
            <Line dataKey="balance" stroke="rgba(0, 0, 0, 0.87)" type="monotone"/>
            </LineChart>

        </div>
    );
    
};
export default balanceChart;