import { FC, ChangeEvent, useState, FormEvent } from 'react'
import './ExpenseForm.css'

interface Expense {
    title?: string,
    date?: Date | string,
    amount?: number
}

interface ExpenseFormInterface {
    onSaveNewExpense(expense: Expense): void
}

export const ExpenseForm: FC<ExpenseFormInterface> = ({onSaveNewExpense}) => {
    //Multiple States approach

    // const [title, setTitle] = useState<string | undefined>(undefined)
    // const [amount, setAmount] = useState<number | undefined>(undefined)
    // const [date, setDate] = useState<Date | undefined>(undefined)

    const [expense, setExpense] = useState<Expense | undefined>(undefined)

    const handleFormChange = (field: string, event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

            //BAD APPROACH BECAUSE OF REACT SCHEDULING

            // setExpense({
            //     ...expense,
            //     [field]: event.target.value
            // })

            //SAFER WAY
            setExpense((prevState: Expense | undefined) => {
                return {...prevState, [field]: event.target.value}
            })
    }

    const submitHnadler = (event: FormEvent<Expense>) => {
        event.preventDefault()

        if(expense)
            onSaveNewExpense(expense)

        setExpense(undefined)
    }

    return (
        <form onSubmit={submitHnadler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' placeholder='Expense Title' required 
                        value={expense && expense.title ? expense.title : ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('title', e)}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>  
                    <input type='text' placeholder='Amount' required min='0.01' step='0.01' 
                        value={expense && expense.amount ? expense.amount : ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('amount', e)}/>
                </div>                  
                <div className='new-expense__control'>    
                    <label>Date</label>
                    <input type='date' required min='2019-01-01' max='2022-12-31' 
                        value={expense && expense.date ? expense.date.toString() : ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('date', e)}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm