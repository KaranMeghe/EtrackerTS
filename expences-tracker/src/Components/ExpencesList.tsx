/** @format */
import React from 'react';

interface EXPENCES {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface EXPENCESLISTPROPS {
  expenses: EXPENCES[];
  onDelete: (id: number) => void;
}

const ExpencesList: React.FC<EXPENCESLISTPROPS> = ({ expenses, onDelete }) => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {expenses.reduce((acc, expense) => {
              return acc + expense.amount;
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpencesList;
