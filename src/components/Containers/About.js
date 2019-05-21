import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import AboutContainer from '../StyledComponents/AboutContainer';

const About = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <animated.div style={fade}>
      <StaticQuery
        query={graphql`
          query AboutQuery {
            contentfulAbout {
              aboutMe {
                childMarkdownRemark {
                  html
                }
              }
              profileImages {
                title
                fluid {
                  src
                }
              }
            }
          }
        `}
        render={data => {
          const { aboutMe, profileImages } = data.contentfulAbout;
          return (
            <AboutContainer theme={props.theme}>
              <div className="about">
                <h1>About The Record</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: aboutMe.childMarkdownRemark.html,
                  }}
                />
                <div className="profileImages">
                  {profileImages.map((img, i) => {
                    return (
                      <img src={img.fluid.src} key={i} alt="profile pic" />
                    );
                  })}
                </div>
                <div className="buttons">
                  <button onClick={() => props.handleClick(1)}>
                    The Record
                  </button>
                  <button onClick={() => props.handleClick(2)}>
                    Making Of
                  </button>
                  <button onClick={() => props.handleClick(3)}>
                    Your Stories
                  </button>
                </div>
              </div>
            </AboutContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default About;
