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

const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 8px;
`;

export default App;
