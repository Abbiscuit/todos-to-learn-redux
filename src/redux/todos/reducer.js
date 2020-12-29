import { v4 } from 'uuid';
import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: [
    { id: 1, text: 'So Learn React concepts', isCompleted: false },
    { id: 2, text: 'To Buy MacBook', isCompleted: false },
    { id: 3, text: 'Christmas', isCompleted: false },
    { id: 4, text: 'Summer Vacation', isCompleted: true },
    { id: 5, text: 'Learn React concepts', isCompleted: true },
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: v4(), text: action.payload, isCompleted: false },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
