/** @format */
import ExpencesForm from './ExpencesForm';
import ExpencesFilter from './ExpencesFilter';
import ExpencesList from './ExpencesList';
import { useState } from 'react';
import { Expences } from '../utilities/utilities';

const ExpensesTracker: React.FC = () => {
  const [expenses, setExpenses] = useState(Expences);

  const handleOnDelete = (id: string) => {
    const updatedList = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(updatedList);
  };

  return (
    <div>
      <ExpencesForm />
      <ExpencesFilter />
      <ExpencesList expenses={expenses} onDelete={handleOnDelete} />
    </div>
  );
};

export default ExpensesTracker;
