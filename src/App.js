import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const { todos } = useSelector(state => state.todos);

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
