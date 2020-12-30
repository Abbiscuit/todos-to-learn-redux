import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { selectTodosLength } from './redux/todos/selectors';

const App = () => {
  const { todos } = useSelector(state => state.todos);
  const count = useSelector(selectTodosLength);

  return (
    <Wrapper>
      <NewTodoForm />

      <TemporaryCounterText>{count === 0 ? '' : count}</TemporaryCounterText>

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
  position: relative;
`;

const TemporaryCounterText = styled.p`
  background-color: white;
  padding: 16px 24px;
  border-radius: 10px;
  position: absolute;
  top: 5%;
  right: 0%;
`;

export default App;
