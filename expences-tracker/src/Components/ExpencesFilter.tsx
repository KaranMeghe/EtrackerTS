/** @format */

import React from 'react';

interface FILTERCATEGORIES {
  Categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpencesFilter: React.FC<FILTERCATEGORIES> = ({ Categories, onSelectCategory }) => {
  return (
    <select
      className='form-select my-5'
      aria-label='Default select example'
      onChange={(event) => onSelectCategory(event.target.value)}>
      <option value='' selected>
        All Categories
      </option>
      {Categories.map((cat) => {
        return (
          <option value={cat} key={cat}>
            {cat}
          </option>
        );
      })}
    </select>
  );
};

export default ExpencesFilter;
