import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...otherProps }) => {
  return <Wrapper {...otherProps}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 10px;
  margin-right: ${({ mr }) => (mr ? mr : 0)}px;
  margin-bottom: ${({ mb }) => (mb ? mb : 0)}px;
  background-color: ${({ color, theme }) =>
    color ? theme.palette.primary.main : theme.palette.secondary.main};

  &:hover {
    background-color: ${({ color, theme }) => (color ? '#aece6a' : '#D87D7D')};
  }
`;

export default Button;
