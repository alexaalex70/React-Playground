import { FC } from 'react'
import { Card } from '../UI/Card'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

interface Expense {
    date: Date | string,
    title: string,
    amount: number
}

interface FullExpense {
    date: Date | string,
    id: string,
    title: string,
    amount: number
}

interface NewExpenseInterface {
    handleAddNewExpense(expense: FullExpense): void
}

export const NewExpense: FC<NewExpenseInterface> = ({handleAddNewExpense}) => {
    const handleSaveNewExpense = (expense: Expense) => {
        const newExpense = {...expense, id: Math.random().toString()};
        newExpense.date = new Date(expense.date);
        handleAddNewExpense(newExpense)
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onSaveNewExpense={handleSaveNewExpense}/>
        </Card>
    )
 }

 export default NewExpense