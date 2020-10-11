import React, { useMemo } from 'react';
import { useSelector } from 'react-redux'
import TodoListItem from "./TodoListItem";

function TodoList() {

  const { list, filters } = useSelector(state => state.todos);

  const filteredTodos = useMemo(() => {
    return list.filter(todo => {
      if (filters.hideCompleted) return !todo.completed;
      return true;
    });
  }, [list, filters]);


  return (
    <ul>
      {
        filteredTodos.map(todo => (
        <TodoListItem
          title={todo.title}
          hasCompleted={todo.completed}
          todoId={todo.id}
          key={todo.id}
        />))
      }
    </ul>
  );
}

export default TodoList;
