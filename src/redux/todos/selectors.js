import { createSelector } from 'reselect';

export const selectTodosLength = createSelector(
  state => state.todos.todos,
  todos => todos.map(todo => todo.text).length
);

export const selectIncompletedTodos = createSelector(
  state => state.todos.todos,
  todos => todos.filter(todo => todo.isCompleted === false)
);

export const selectCompletedTodos = createSelector(
  state => state.todos.todos,
  todos => todos.filter(todo => todo.isCompleted === true)
);
