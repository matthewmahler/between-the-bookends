import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import AboutContainer from '../StyledContainers/AboutContainer';
import Nav from '../Nav';

const About = (props) => {
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
        render={(data) => {
          const { aboutMe, profileImages } = data.contentfulAbout;
          const links = [
            { text: 'The Record', path: '/TheRecord' },
            { text: 'Making Of', path: '/TheProcess' },
            { text: 'Your Stories', path: '/TheBookshelf' },
          ];

          return (
            <AboutContainer theme={props.theme}>
              <div className="about">
                <h1>About The Record</h1>
                <div
                  className="bio"
                  dangerouslySetInnerHTML={{
                    __html: aboutMe.childMarkdownRemark.html,
                  }}
                />
                <div className="profileImages">
                  {profileImages.map((img, i) => {
                    return (
                      <div
                        role="presentation"
                        className="profileImageContainer"
                        onMouseOver={() => setHovered(i)}
                        onMouseOut={() => setHovered(null)}
                        onFocus={() => setHovered(i)}
                        onBlur={() => setHovered(null)}
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
              </div>
              <Nav links={links} />
            </AboutContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default About;
