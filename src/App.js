import React from 'react';
import styled from 'styled-components';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const todos = [
  { id: 1, text: 'Learn React concepts', isCompleted: false },
  { id: 2, text: 'Buy MacBook', isCompleted: false },
  { id: 3, text: 'Christmas', isCompleted: false },
  { id: 4, text: 'Summer Vacation', isCompleted: true },
  { id: 5, text: 'Learn React concepts', isCompleted: true },
];

const App = () => {
  return (
    <Wrapper>
      <NewTodoForm />
      <TodoList todos={todos} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 119px 0;
  max-width: 824px;
  margin: 0 auto;
`;

export default App;
