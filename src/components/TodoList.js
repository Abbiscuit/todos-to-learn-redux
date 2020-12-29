import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  const imcompletedTodos = todos.filter(todo => todo.isCompleted === false);
  const completedTodos = todos.filter(todo => todo.isCompleted === true);

  return (
    <Wrapper>
      <Col>
        <Title>Incomplete: </Title>
        {imcompletedTodos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </Col>

      <Col>
        <Title>Completed: </Title>
        {completedTodos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </Col>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  /*   
  display: flex;
  flex-direction: row;
  justify-content: space-between; */
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 8px;
`;

const Col = styled.div`
  width: 100%;
`;

export default TodoList;
