import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo }) => {
  return (
    <Wrapper>
      <Title>{todo.text}</Title>

      <div>
        <button>Complete</button>
        <button>Remove</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 407px;
  width: 100%;
  background-color: #fff;
  padding: 16px;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  color: #222222;
`;

export default TodoListItem;
