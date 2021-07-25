import { FC , useState} from 'react'
import { Card } from '../UI/Card'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

interface ExpenseItemInterface {
    title: string,
    amount: number,
    date: Date
}

export const ExpenseItem: FC<ExpenseItemInterface> = ({title, amount, date}) => {
    const [expenseTitle, setExpenseTitle] = useState<string>(title)

    const updateClick = () => {
        setExpenseTitle('Updated!')
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date}/>
                <div className='expense-item__description'>
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>{amount}</div>
                    <button onClick={updateClick}>Update Title</button>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem