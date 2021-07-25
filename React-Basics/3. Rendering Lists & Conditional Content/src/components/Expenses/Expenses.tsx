import { FC, useState } from 'react'
import { Card } from '../UI/Card'
import { ExpensesList } from './ExpensesList'
import { ExpensesFilter } from './ExpensesFilter'

import './Expenses.css'

interface ExpenseItemInterface {
    id: string,
    title: string,
    amount: number,
    date: Date
}

interface ExpensesInterface {
    items: [ExpenseItemInterface]
}
export const Expenses: FC<ExpensesInterface> = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    };

    const filterExpenses = items.filter((expense: any) => expense.date.getFullYear().toString() === filteredYear)

    let expensesContent: any = <p>Not expenses found.</p>

    //TYPES OF CONDITIONALS

    //CONDITIONAL WITH ? DIRECT IN JSX PART
    //CONDITIONAL WITH && DIRECT IN JSX PART

    //GET OUTSIDE AND CALL FROM JSX
    // if(filterExpenses.length > 0)
    //     expensesContent = filterExpenses.map((item: any, key: any) => (
    //         <ExpenseItem 
    //             title={item.title}
    //             amount={item.amount}
    //             date={item.date}
    //             key={key}
    //         />
    //     ))

    //GO ON A SEPARATE COMPONENT

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filterExpenses} />
        </Card>
    )
}

export default Expenses