import { FC } from 'react'

import './ExpensesFilter.css'

interface ExpensesFilterInterface {
    selected: string,
    onChangeFilter(value: string): void
}

export const ExpensesFilter: FC<ExpensesFilterInterface> = ({selected, onChangeFilter}) => {
    const handleDropDownChange = (event: any) => {
        onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <select value={selected} onChange={handleDropDownChange}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter