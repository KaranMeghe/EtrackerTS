/** @format */
import ExpencesForm from './ExpencesForm';
import ExpencesFilter from './ExpencesFilter';
import ExpencesList from './ExpencesList';
import { useState } from 'react';
import { Expences } from '../utilities/utilities';
import { Categories } from '../utilities/utilities';

const ExpensesTracker: React.FC = () => {
  const [expenses, setExpenses] = useState(Expences);
  const [selectedCategories, setSelectedCategories] = useState('');

  const handleOnDelete = (id: string) => {
    const updatedList = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(updatedList);
  };

  const visibleCategoryExpenses = selectedCategories
    ? expenses.filter((expense) => expense.category === selectedCategories)
    : expenses;

  return (
    <>
      <ExpencesForm />
      <ExpencesFilter Categories={Categories} onSelectCategory={(category) => setSelectedCategories(category)} />
      {expenses.length > 0 && <ExpencesList expenses={visibleCategoryExpenses} onDelete={handleOnDelete} />}
    </>
  );
};

export default ExpensesTracker;
