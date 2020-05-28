import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import MakingOfContainer from '../StyledContainers/MakingOfContainer';
import TimeLineMedia from '../TimeLineMedia';
import Nav from '../Nav';
const MakingOf = (props) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const links = [
    { text: 'Home', path: '/' },
    { text: 'The Record', path: '/TheRecord' },
    { text: 'Your Stories', path: '/TheBookshelf' },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <animated.div style={fade}>
      <StaticQuery
        query={graphql`
          query MakingOfQuery {
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
            contentfulMaking {
              title
              subtitle
              body {
                childMarkdownRemark {
                  html
                }
              }
              media {
                title
                file {
                  contentType
                  url
                }
              }
            }
          }
        `}
        render={(data) => {
          return (
            <MakingOfContainer theme={props.theme}>
              <div className="header">
                <h1>{data.contentfulMaking.title}</h1>
                <h2>{data.contentfulMaking.subtitle}</h2>
                {!toggle && (
                  <div
                    className="making"
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulMaking.body.childMarkdownRemark.html,
                    }}
                  />
                )}
                <button
                  className="flipper"
                  onClick={() => setToggle((toggle) => !toggle)}
                >
                  {toggle ? 'View Story' : 'View Gallery'}
                </button>
              </div>

              {toggle && (
                <div className="timeline">
                  <TimeLineMedia
                    media={data.contentfulMaking.media}
                    theme={props.theme}
                  />
                </div>
              )}
              <Nav links={links} />
            </MakingOfContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default MakingOf;

//
