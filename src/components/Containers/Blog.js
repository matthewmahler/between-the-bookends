import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import BlogCard from '../BlogCard';
import BlogPost from '../BlogPost';
import BlogContainer from '../StyledComponents/BlogContainer';

const Blog = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const [chosenBlogPost, setBlogPost] = useState(0);
  const [showPost, togglePost] = useState(false);

  function handleCardClick(index, toggle) {
    setBlogPost(index);
    togglePost(toggle);
  }
  return (
    <animated.div style={fade}>
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
          const currentBG =
            data.contentfulAbout.backgroundImages[index].file.url;
          return (
            <BlogContainer
              bg={currentBG}
              theme={props.theme}
              showPost={!showPost}
            >
              <div className="blogHeader">
                <h1>{data.contentfulBlogPage.title}</h1>
                <p>{data.contentfulBlogPage.subtitle}</p>
                <button
                  className="storyButton"
                  onClick={() => props.handleClick(4)}
                >
                  Write a Story
                </button>
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
            </BlogContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default Blog;
