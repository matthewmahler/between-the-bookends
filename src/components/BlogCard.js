import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background-color: ${props => props.theme.blueGray};
  color: ${props => props.theme.white};
  filter: drop-shadow(5px 5px 5px ${props => props.theme.blue});
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    background-color: ${props => props.theme.lightBlue};
    color: ${props => props.theme.black};
    filter: drop-shadow(5px 5px 5px ${props => props.theme.red});
  }
  h2 {
    margin: 0.5em auto;
  }
  h4 {
    margin: 0.5em auto;
  }
  p {
    font-size: 0.9em;
    margin: 0.5em auto;
    max-width: 80%;
  }
`;
const BlogCard = props => {
  return (
    <Container theme={props.theme} onClick={props.action}>
      <h2>{props.blogPost.title}</h2>
      <h4>{props.blogPost.postDate}</h4>
      <p>
        {props.blogPost.postBody.childMarkdownRemark.excerpt}
        <span>Read More</span>
      </p>
    </Container>
  );
};

export default BlogCard;
