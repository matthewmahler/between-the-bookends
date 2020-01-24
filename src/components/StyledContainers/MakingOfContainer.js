import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  .header {
    width: auto;
    background: ${props => props.theme.black}cc;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    margin-top: 2em;
    min-width: 50vw;
    max-width: 960px;
    h1 {
      border-bottom: 3px solid ${props => props.theme.blue};
      color: ${props => props.theme.white};
      text-shadow: 0px 4px 3px ${props => props.theme.blue}99,
        0px 8px 13px ${props => props.theme.darkBlue}55,
        0px 18px 23px ${props => props.theme.darkBlue}33;
      font-size: 4em;
      margin: 0;
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
    max-width: 960px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
      max-width: 85vw;

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
