import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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
  background-color: ${props => props.theme.black}ee;
  color: ${props => props.theme.white};
  box-shadow: 0px 4px 3px 0 ${props => props.theme.blue}99,
    0px 8px 13px 0 ${props => props.theme.darkBlue}55,
    0px 18px 23px 0 ${props => props.theme.darkBlue}33;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    box-shadow: 0px 4px 3px 0 ${props => props.theme.red}99,
      0px 8px 13px 0 ${props => props.theme.darkRed}55,
      0px 18px 23px 0 ${props => props.theme.darkRed}33;
    h2 {
      transition: 0.2s;
      border-bottom: 2px solid ${props => props.theme.red};
    }
  }
  h2 {
    margin: 0 auto;
    padding: 0.1em;
    border-bottom: 2px solid ${props => props.theme.blue};
  }
  h4 {
    margin: 1em auto;
  }
  p {
    font-size: 0.9em;
    margin: 0 auto;
    max-width: 80%;
  }
  @media (max-width: 450px) {
    min-height: 40px;
    max-height: 64px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0.7em;
    box-shadow: 0px 2px 1px 0 ${props => props.theme.blue}99,
      0px 4px 7px 0 ${props => props.theme.darkBlue}55,
      0px 9px 12px 0 ${props => props.theme.darkBlue}33;
    h2 {
      font-size: 1em;
      border-bottom: 1px solid ${props => props.theme.blue};
    }
    h4 {
      font-size: 0.8em;
    }
    p {
      display: none;
    }
  }
`;
const BlogCard = props => {
  return (
    <Container theme={props.theme} onClick={props.action}>
      <h2>{props.blogPost.title}</h2>
      <h4>{moment(props.blogPost.postDate).format('MM-DD-YYYY')}</h4>
      <p>
        {props.blogPost.postBody.childMarkdownRemark.excerpt}
        <span>Read More</span>
      </p>
    </Container>
  );
};

export default BlogCard;
