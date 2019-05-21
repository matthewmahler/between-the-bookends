import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  font-family: 'miller';
  div.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 960px;
    box-sizing: border-box;
    background: ${props => props.theme.lightBlue}dd;
    color: ${props => props.theme.black};
    padding: 3em;
    border-radius: 30px;

    h1 {
      font-size: 2em;
      margin: 0 auto;
      border-bottom: 3px solid ${props => props.theme.blue};
    }
    div.buttons {
      width: auto;
      button {
        margin: 2em;
        outline: none;
        border: white 1px solid;
        cursor: pointer;
        background: ${props => props.theme.blue};
        position: relative;
        font-size: 1em;
        color: ${props => props.theme.white};
        padding: 0.5em 1em;
        border-radius: 10px;
        box-shadow: 0 6px ${props => props.theme.blueGray};
      }

      button:hover {
        transition: 0.1s;
        box-shadow: 0 4px ${props => props.theme.blueGray};
        top: 2px;
      }

      button:active {
        transition: 0.1s;
        box-shadow: 0 0 ${props => props.theme.blueGray};
        top: 6px;
      }
    }
  }
  div.profileImages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      max-width: 100%;
      border-radius: 30px;
      transition: 0.2s;
    }
    img:hover {
      transition: 0.2s;
      border-radius: 100px;
    }
  }
`;
const AboutContainer = ({ children, theme }) => {
  return <Container theme={theme}>{children}</Container>;
};

export default AboutContainer;
