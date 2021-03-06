import React, { useState } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { animated, useSpring, useTransition } from 'react-spring';
import BlogPost from '../BlogPost';
import BlogCardWrapper from '../BlogCardWrapper';
import BlogContainer from '../StyledContainers/BlogContainer';
import Nav from '../Nav';

const Blog = (props) => {
  const [chosenBlogPost, setBlogPost] = useState(0);
  const [showPost, togglePost] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const transitions = useTransition(showPost, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    immediate: !showPost,
  });
  const links = [
    { text: 'Home', path: '/' },
    { text: 'The Record', path: '/TheRecord' },
    { text: 'Making Of', path: '/TheProcess' },
  ];
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
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
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
        render={(data) => {
          const blogPosts = data.contentfulBlogPage.blogPosts;

          const index = Math.round(Math.random() * 7);
          const currentBG = data.contentfulAbout.backgroundImages[index].fluid;
          return (
            <BlogContainer
              bg={currentBG}
              theme={props.theme}
              showPost={!showPost}
            >
              <div className="blogHeader">
                <h1>{data.contentfulBlogPage.title}</h1>
                <p>{data.contentfulBlogPage.subtitle}</p>
                <Link className="storyButton" to="/Submit">
                  Write a Story
                </Link>
              </div>

              {transitions.map(({ item, key, props: animation }) =>
                !item ? (
                  <BlogCardWrapper
                    key={key}
                    blogPosts={blogPosts}
                    showPost={showPost}
                    handleCardClick={handleCardClick}
                    theme={props.theme}
                  />
                ) : (
                  <animated.div style={animation}>
                    <BlogPost
                      theme={props.theme}
                      blogPost={blogPosts[chosenBlogPost]}
                      showPost={showPost}
                      action={() => handleCardClick(0, !showPost)}
                    />
                  </animated.div>
                )
              )}
              <Nav links={links} />
            </BlogContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default Blog;
