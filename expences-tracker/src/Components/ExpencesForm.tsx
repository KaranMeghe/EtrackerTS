/** @format */

import React from 'react';

interface CATEGORIES {
  Categories: string[];
}

const ExpencesForm: React.FC<CATEGORIES> = ({ Categories }) => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input id='description' type='text' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input id='amount' type='number' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select name='' id='category' className='form-select'>
          {Categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>

      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpencesForm;
