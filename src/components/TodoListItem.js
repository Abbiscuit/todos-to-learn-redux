import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TodoListItem = ({ todo }) => {
  return (
    <Wrapper>
      <Title>{todo.text}</Title>
      <CreatedAt>Created at: 2020/12/29</CreatedAt>

      <ButtonGroup>
        {!todo.isCompleted && (
          <Button color="primary" mr={8}>
            Complete
          </Button>
        )}
        <Button>Remove</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* max-width: 407px; */
  min-height: 174px;
  width: 100%;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 10px;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  color: #222222;
`;

const CreatedAt = styled.p`
  flex: 1;

  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.palette.text.grayText};
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export default TodoListItem;
