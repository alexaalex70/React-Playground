import { FC } from 'react'
import { Card } from '../UI/Card'
import { ExpenseItem } from '../Expenses/ExpenseItem'
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
    return (
        <Card className="expenses">
            {
                items.map((item: ExpenseItemInterface, key: number) => 
                    <ExpenseItem 
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        key={key}
                    />)
            }
        </Card>
    )
}

export default Expenses