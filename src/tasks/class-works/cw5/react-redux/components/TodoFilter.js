import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { applyFilter } from "../redux/actions/filters";

function TodoFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.todos.filters);

  const onApplyFilter = () => {
    dispatch(applyFilter('hideCompleted', !filters.hideCompleted));
  };

  return (
    <div>
      Hide completed: <input type="checkbox" onChange={onApplyFilter} checked={filters.hideCompleted}/>
    </div>
  );
}

export default TodoFilter;
