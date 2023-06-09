import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <label>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={css.inputFilter}
      />
    </label>
  );
};

export default Filter;
