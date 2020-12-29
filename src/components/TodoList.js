import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <Wrapper key={todo.id}>
          <TodoListItem todo={todo} />
          <TodoListItem todo={todo} />
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TodoList;
