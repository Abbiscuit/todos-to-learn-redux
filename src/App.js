import React from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

// const useStyles = makeStyles(theme => ({
//   root: {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingTop: 119,
//     maxWidth: 824,
//     margin: '0 auto',
//   },
// }));

const todos = [{ id: 1, text: 'Learn React concepts' }];

const App = () => {
  return (
    <div>
      <span className="material-icons">accessibility</span>
      <NewTodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
