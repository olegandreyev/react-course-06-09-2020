import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../redux/actions/todos";

function AddTodoForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(addTodo(title));
    setTitle('')
  };

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
}

export default AddTodoForm;
