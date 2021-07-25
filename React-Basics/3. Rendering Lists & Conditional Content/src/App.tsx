import './App.css';
import { useState } from 'react'
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense'; 

interface FullExpense {
  date: Date,
  id: string,
  title: string,
  amount: number
}

function App() {
  const [expenses, setExpenses] = useState<any>([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const handleAddNewExpense = (newExpense: FullExpense) => {
    setExpenses((prevState: any) => [...prevState, newExpense])
  }

  return (
    <div>
      <NewExpense handleAddNewExpense={handleAddNewExpense}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
