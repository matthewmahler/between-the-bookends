import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
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

  .timeline {
    min-width: 60vw;
    width: auto;
    max-width: 960px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      margin: 1em auto;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    h1 {
      font-size: 2.2em;
    }
    h2 {
      font-size: 1.3em;
    }

    .back {
      font-size: 0.8em;
      padding: 0.5em;
      top: 0;
      left: 0;
    }
  }
`;
const MakingOfContainer = props => {
  return <Container theme={props.theme}>{props.children}</Container>;
};

export default MakingOfContainer;
