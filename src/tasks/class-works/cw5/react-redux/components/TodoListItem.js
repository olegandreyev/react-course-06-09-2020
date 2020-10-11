import React from 'react';
import classNames from 'classnames';
import { Icon } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions/todos";
import './todo-list-item.css';

function TodoListItem({ title, todoId, hasCompleted }) {
  const dispatch = useDispatch();

  return (
    <li className={classNames('todo-list-item', { completed: hasCompleted })}>
      {title}
      <Icon name='check circle outline' onClick={() => dispatch(toggleTodo(todoId, hasCompleted))} />
      <Icon name='delete' onClick={() => dispatch(removeTodo(todoId))} />
    </li>
  );
}

export default TodoListItem;
