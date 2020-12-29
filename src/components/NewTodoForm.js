import React, { useState } from 'react';

import styled from 'styled-components';

// const useStyles = makeStyles(theme => ({
//   input: {
//     height: '100%',
//     flex: 1,
//   },
// }));

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
      <Button>Create Todo</Button>
    </Wrapper>
  );
};

const Input = styled.input``;

const Button = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background-color: #dff4b0;

  &:hover {
    background-color: #aece6a;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  height: 72px;
  padding: 24px 20px;
  margin-bottom: 72px;
`;

export default NewTodoForm;
