import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import BalanceChart from "../components/dashboard/BalanceChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import SummaryCard from "../components/dashboard/SummaryCard";
import { calcutations } from "../utils/calculations";


const Dashboard = () => {
    const { transactions } = useContext(AppContext);

    const { balance, income, expense } = calcutations(transactions);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="summary-cards" style={{display: "flex", gap: "20px"}}>
                <SummaryCard title="Balance" value={balance} />
                <SummaryCard title="Income" value={income} />
                <SummaryCard title="Expense" value={expense} />
            </div>
            <div className="charts" style={{display: "flex", gap: "20px", marginTop: "20px"}}>
                <BalanceChart transactions={transactions} />
                <CategoryChart transactions={transactions} />
            </div>
        </div>
    );
};
export default Dashboard;


