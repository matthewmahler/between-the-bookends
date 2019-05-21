import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'miller';
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
      color: ${props => props.theme.blue};
      margin: 0;
      padding: 0;
    }
    p {
      color: ${props => props.theme.blue};
      font-size: 1.5em;
    }
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
`;

const BlogContainer = props => {
  return (
    <Container showPost={props.showPost} theme={props.theme}>
      {props.children}
    </Container>
  );
};

export default BlogContainer;
