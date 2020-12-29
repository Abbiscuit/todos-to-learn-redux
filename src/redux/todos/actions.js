export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const createTodos = text => ({
  type: CREATE_TODO,
  payload: text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: id,
});
