import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em auto;
  .wrapper {
    margin: 1em auto;
    display: ${props => (props.showPost ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    box-sizing: border-box;
  }
  .blogHeader {
    width: auto;
    background: ${props => props.theme.black}ee;
    border-radius: 2em;
    display: ${props => (props.showPost ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    h1 {
      font-size: 4em;
      text-shadow: 0px 4px 3px ${props => props.theme.blue}99,
        0px 8px 13px ${props => props.theme.darkBlue}55,
        0px 18px 23px ${props => props.theme.darkBlue}33;
      color: ${props => props.theme.white};
      border-bottom: 3px solid ${props => props.theme.blue};
      margin: 0;
      padding: 0;
    }
    p {
      color: ${props => props.theme.white};
      font-size: 1.5em;
    }
  }

  .storyButton {
    margin: 0.5em;
    padding: 0.5em;
    font-size: 1.5em;
    width: 40%;
    border: 1px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    border-radius: 0.5em;
    background-color: ${props => props.theme.blue};
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.darkBlue};
      color: ${props => props.theme.lightBlue};
    }
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .back {
      font-size: 0.7em !important;
    }
    .blogHeader {
      padding: 1em;
      h1 {
        text-shadow: 0px 2px 2px ${props => props.theme.blue}99,
          0px 4px 7px ${props => props.theme.darkBlue}55,
          0px 9px 12px ${props => props.theme.darkBlue}33;
        font-size: 2em;
        color: ${props => props.theme.white};
        border-bottom: 2px solid ${props => props.theme.blue};
        margin: 0;
        padding: 0;
      }
      p {
        color: ${props => props.theme.white};
        font-size: 1em;
        text-align: center;
      }
    }
    .storyButton {
      margin: 0.5em;
      padding: 0.5em;
      font-size: 1em;
      width: 40%;
      border: 1px solid ${props => props.theme.white};
      color: ${props => props.theme.white};
      border-radius: 0.5em;
      background-color: ${props => props.theme.blue};
      cursor: pointer;
      :hover {
        background-color: ${props => props.theme.darkBlue};
        color: ${props => props.theme.lightBlue};
      }
    }
  }
`;

const BlogContainer = props => {
  return (
    <Container showPost={props.showPost} theme={props.theme}>
      {props.children}
    </Container>
  );
};

export default BlogContainer;
