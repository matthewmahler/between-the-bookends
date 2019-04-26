import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 1em;
  box-sizing: border-box;
  border-radius: 20px;
  display: ${props => (props.showPost ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 80%;

  padding: 1em;
  background-color: ${props => props.theme.lightBlue};
  color: ${props => props.theme.black};
  margin: 1em auto;
  h1 {
    font-size: 3em;
    margin: 0.3em auto;
  }
  h4 {
    margin: 0 auto;
  }
  p {
    padding: 0 2em;
    text-indent: 1em;
  }
  .close {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    bottom: 0;
    right: 0;
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

const BlogPost = props => {
  return (
    <Container theme={props.theme} showPost={props.showPost}>
      <h1>{props.blogPost.title}</h1>
      <h4>{props.blogPost.signature}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: props.blogPost.postBody.childMarkdownRemark.html,
        }}
      />
      <button className="close" onClick={props.action}>
        Close
      </button>
    </Container>
  );
};

export default BlogPost;
