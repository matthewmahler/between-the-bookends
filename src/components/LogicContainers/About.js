import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import AboutContainer from '../StyledContainers/AboutContainer';
import Button from '../UI/Button';

const About = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const [hovered, setHovered] = useState(null);

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
                description
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
          }
        `}
        render={data => {
          const { aboutMe, profileImages } = data.contentfulAbout;
          const buttons = [
            { text: 'The Record', clickIndex: 1 },
            { text: 'Making Of', clickIndex: 2 },
            { text: 'Your Stories', clickIndex: 3 },
          ];

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
                      <div
                        className="profileImageContainer"
                        onMouseOver={() => setHovered(i)}
                        onMouseOut={() => setHovered(null)}
                        key={i}
                      >
                        <img
                          src={img.fluid.src}
                          alt="profile pic"
                          style={{
                            transition: '0.2s',
                            borderRadius: hovered === i ? '100px' : '30px',
                          }}
                        />
                        <p
                          className="overlay"
                          style={{
                            opacity: hovered === i ? 1 : 0,
                            transition: '0.3s',
                          }}
                        >
                          {img.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="buttons">
                  {buttons.map((button, i) => (
                    <Button
                      handleClick={props.handleClick}
                      clickIndex={button.clickIndex}
                      margin="2em"
                      backgroundColor={props.theme.blue}
                      border={`${props.theme.white} 1px solid`}
                      fontColor={props.theme.white}
                      shadow={props.theme.blueGray}
                      padding="0.5em 1em"
                      size="1em"
                      key={i}
                    >
                      {button.text}
                    </Button>
                  ))}
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
