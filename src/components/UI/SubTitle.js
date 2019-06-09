import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.h2`
  font-size: ${props => props.size}em;
  font-style: ${props => props.fontStyle};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-bottom: ${props => props.border};
  color: ${props => props.fontColor};
`;

const SubTitle = props => {
  return (
    <StyledSubTitle
      size={props.size}
      margin={props.margin}
      padding={props.padding}
      fontColor={props.fontColor}
      border={props.border}
      fontStyle={props.fontStyle}
    >
      {props.children}
    </StyledSubTitle>
  );
};

export default SubTitle;
