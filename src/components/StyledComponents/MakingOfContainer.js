import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.white};
    font-size: 4em;
    margin-bottom: 0;
    padding: 0;
  }
  h2 {
    color: ${props => props.theme.white};
    font-size: 2em;
    margin: 0.5em;
    padding: 0;
  }
  .back {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 50vh;
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
  .timeline {
    width: auto;
    height: 100vh;
    overflow: scroll;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    align-items: center;
    justify-content: center;
  }
`;
const MakingOfContainer = props => {
  return <Container theme={props.theme}>{props.children}</Container>;
};

export default MakingOfContainer;
