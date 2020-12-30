import React from 'react';
import styled from 'styled-components';
import { FcCheckmark, FcDocument } from 'react-icons/fc';

import TodoListItem from './TodoListItem';
import {
  selectCompletedTodos,
  selectIncompletedTodos,
} from '../redux/todos/selectors';
import { useSelector } from 'react-redux';

const TodoList = () => {
  // const imcompletedTodos = todos.filter(todo => todo.isCompleted === false);
  // const completedTodos = todos.filter(todo => todo.isCompleted === true);
  const imcompletedTodos = useSelector(selectIncompletedTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  return (
    <Wrapper>
      <Col>
        <Title>
          <FcDocument />
          Incomplete:
        </Title>
        {imcompletedTodos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </Col>

      <Col>
        <Title>
          <FcCheckmark /> Completed:{' '}
        </Title>
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
`;

const Title = styled.h3`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
  }
`;

const Col = styled.div`
  width: 100%;
`;

export default TodoList;
