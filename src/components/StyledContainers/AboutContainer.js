import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: scroll;
  div.about {
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
    max-height: 100vh;
    overflow: scroll;
    h1 {
      font-size: 4em;
      margin: 0 auto;
      border-bottom: 3px solid ${props => props.theme.blue};
      color: ${props => props.theme.white};
      text-shadow: 0px 4px 3px ${props => props.theme.blue}99,
        0px 8px 13px ${props => props.theme.darkBlue}55,
        0px 18px 23px ${props => props.theme.darkBlue}33;
    }

    div.buttons {
      width: auto;
    }
    @media (max-width: 768px) {
      width: 90%;
      max-width: 700px;
    }
    @media (max-width: 450px) {
      width: 100%;
      max-width: 350px;
      font-size: 0.8em;
      div {
        max-height: 60vh;
        overflow: auto;
        text-align: center;
      }
      div.buttons {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 1em auto;
        button {
          margin: 0 0.2em;
          padding: 0.5em;
          font-size: 0.6em;
          border-radius: 3px;
          box-shadow: none;
        }
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
    .profileImageContainer {
      position: relative;
      text-align: center;
      img {
        max-width: 100%;
        border-radius: 30px;
        transition: 0.2s;
      }

      p.overlay {
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white}ff;
        position: absolute;
        width: 80%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.5em;
        border-radius: 0.5em;
        font-size: 1em;
      }
      @media (max-width: 768px) {
        p.overlay {
          font-size: 0.7em;
        }
      }
      @media (max-width: 450px) {
        padding: 0.5em;
        img {
          border-radius: 5px;
        }
        img:hover {
          transition: 0.2s;
          border-radius: 15px;
        }
        p.overlay {
          font-size: 0.5em;
          padding: 0 auto;
        }
      }
    }
  }
  @media (max-width: 450px) {
    max-height: 100vh;
    div.about {
      padding: 1em;
      h1 {
        font-size: 2em;
      }
      div.profileImages {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .profileImageContainer {
          margin: 0 0.2em;
          padding: 0;
          img {
            border-radius: 5px !important;
          }
        }
      }
    }
  }
`;
const AboutContainer = ({ children, theme }) => {
  return <Container theme={theme}>{children}</Container>;
};

export default AboutContainer;
