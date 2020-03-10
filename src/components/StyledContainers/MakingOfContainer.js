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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 960px;
    box-sizing: border-box;
    background: ${props => props.theme.black}dd;
    color: ${props => props.theme.white};
    padding: 3em;
    border-radius: 30px;

    .making {
      max-height: 50vh;
      overflow: scroll;
    }
    button {
      margin: 1em;
      padding: 1em;
      border: 1px solid ${props => props.theme.blue};
      border-radius: 0.5em;
      background-color: transparent;
      color: ${props => props.theme.blue};
      cursor: pointer;
      :hover {
        background-color: ${props => props.theme.lightGray};
        color: ${props => props.theme.blue};
      }
    }
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
