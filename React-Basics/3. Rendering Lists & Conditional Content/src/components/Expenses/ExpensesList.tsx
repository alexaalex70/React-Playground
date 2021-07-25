import { FC } from 'react'
import { ExpenseItem } from './ExpenseItem'

import './ExpensesList.css'

interface ExpensesListInterface {
    expenses: any
}

export const ExpensesList: FC<ExpensesListInterface> = ({expenses}) => {
    if(expenses.length === 0 ) return <h2 className='expenses-list__fallback'>No expenses found.</h2>

    return (
        <ul className='expenses-list'>
            {
                expenses.map((item: any, key: any) => 
                    <ExpenseItem 
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        key={key}
                    />
                )
            }
        </ul>
    )
}

export default ExpensesList