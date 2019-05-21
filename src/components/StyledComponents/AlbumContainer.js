import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.darkBlue};
  min-height: 100vh;
  .wrapper {
    margin: 1em auto;
    display: ${props => (props.showPost ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 960px;
    box-sizing: border-box;
    min-height: 60vh;
  }
  .back {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 50%;
    left: 0;
    border: 1px solid ${props => props.theme.blue};
    border-radius: 0.5em;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.lightGray};
      color: ${props => props.theme.blue};
    }
  }
`;

const AlbumContainer = props => {
  return (
    <Container showPost={props.showPost} theme={props.theme}>
      {props.children}
    </Container>
  );
};

export default AlbumContainer;
