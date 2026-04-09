import { createContext, useState }  from "react";
import { transactions as initialData } from "../data/mockdata";


export const AppContext = createContext();

export const AppProvider = ({Children}) => {
    const [transactions, setTransactions] = useState(initialData);
    
    return (
        <AppContext.Provider value = {{transactions,setTransactions}}>
        {Children}
        </AppContext.Provider>
    );

};