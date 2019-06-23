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
  .header {
    width: auto;
    background: ${props => props.theme.black}ee;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    margin-top: 2em;
    min-width: 50vw;
    max-width: 960px;
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
  }

  .timeline {
    min-width: 60vw;
    width: auto;
    max-width: 960px;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1em 1fr;

    align-items: center;
    justify-content: center;
    div {
      margin: 1em auto;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    .header {
      h1 {
        font-size: 2em;
      }
      h2 {
        font-size: 1.3em;
      }
    }
    .timeline {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .back {
      font-size: 0.8em;
      padding: 0.5em;
      top: 0;
      left: 0;
    }
    .spacer {
      display: none;
    }
  }
`;

const Line = styled.div`
  width: 1em;
  height: 100%;
  background-color: #cccccc;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MakingOfContainer = props => {
  return <Container theme={props.theme}>{props.children}</Container>;
};

export default MakingOfContainer;
export { Line };
