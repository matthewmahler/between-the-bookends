import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${props => props.size};
  font-style: ${props => props.fontStyle};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-bottom: ${props => props.border};
  color: ${props => props.fontColor};
`;

const Title = props => {
  return (
    <StyledTitle
      size={props.size}
      margin={props.margin}
      padding={props.padding}
      fontColor={props.fontColor}
      border={props.border}
      fontStyle={props.fontStyle}
    >
      {props.children}
    </StyledTitle>
  );
};

export default Title;
