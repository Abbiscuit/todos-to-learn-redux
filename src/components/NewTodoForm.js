import React, { useState } from 'react';

import styled from 'styled-components';
import Button from './Button';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
      <Input
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
        disableUnderline
        type="text"
        placeholder="Type your new todo here"
      />

      <Button color="primary">Create Todo</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  width: 100%;
  height: 72px;
  padding: 24px 20px;
  margin-bottom: 72px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
`;

export default NewTodoForm;
