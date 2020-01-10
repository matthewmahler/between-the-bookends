import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  margin: ${props => props.margin};
  background-color: ${props => props.backgroundColor}cc;
  border: ${props => props.border};
  color: ${props => props.fontColor};
  box-shadow: 0 6px ${props => props.shadow};
  padding: ${props => props.padding};
  font-size: ${props => props.size};
  position: relative;

  border-radius: 10px;

  :hover {
    transition: 0.1s;
    box-shadow: 0 4px ${props => props.shadow};
    top: 2px;
  }

  :active {
    transition: 0.1s;
    box-shadow: 0 0 ${props => props.shadow};
    top: 6px;
  }
`;

const Button = props => {
  return (
    <StyledButton
      onClick={() => props.handleClick(props.clickIndex)}
      margin={props.margin}
      backgroundColor={props.backgroundColor}
      border={props.border}
      fontColor={props.fontColor}
      shadow={props.shadow}
      padding={props.padding}
      size={props.size}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
