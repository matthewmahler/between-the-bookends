import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BlogCard from '../BlogCard';
import BlogPost from '../BlogPost';

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${props => props.bg});
  background-size: cover;
  box-shadow: 0 0 2em 2em ${props => props.theme.black} inset;
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
`;

const Blog = props => {
  const [chosenBlogPost, setBlogPost] = useState(0);
  const [showPost, togglePost] = useState(false);

  function handleCardClick(index, toggle) {
    setBlogPost(index);
    togglePost(toggle);
  }
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          contentfulAbout {
            backgroundImages {
              file {
                url
              }
            }
          }
          contentfulBlogPage {
            title
            subtitle
            blogPosts {
              title
              postDate
              postBody {
                childMarkdownRemark {
                  excerpt
                  html
                }
              }
              signature
            }
          }
        }
      `}
      render={data => {
        const blogPosts = data.contentfulBlogPage.blogPosts;

        const index = Math.round(Math.random() * 7);
        const currentBG = data.contentfulAbout.backgroundImages[index].file.url;
        return (
          <Container bg={currentBG} theme={props.theme} showPost={!showPost}>
            <div className="blogHeader">
              <h1>{data.contentfulBlogPage.title}</h1>
              <p>{data.contentfulBlogPage.subtitle}</p>
            </div>
            <div className="wrapper">
              {blogPosts.map((blogPost, index) => (
                <BlogCard
                  blogPost={blogPost}
                  key={index}
                  theme={props.theme}
                  action={() => handleCardClick(index, !showPost)}
                />
              ))}
            </div>
            <BlogPost
              theme={props.theme}
              blogPost={blogPosts[chosenBlogPost]}
              showPost={showPost}
              action={() => handleCardClick(0, !showPost)}
            />
            <button className="back" onClick={() => props.handleClick(0)}>
              Back
            </button>
          </Container>
        );
      }}
    />
  );
};

export default Blog;
