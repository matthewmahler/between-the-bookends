import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import MakingOfContainer from '../StyledContainers/MakingOfContainer';
import TimeLineMedia from '../TimeLineMedia';
import Button from '../UI/Button';

const MakingOf = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
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
        render={data => {
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
                  onClick={() => setToggle(toggle => !toggle)}
                >
                  {toggle ? 'View Story' : 'View Gallery'}
                </button>
              </div>

              <Button
                handleClick={props.handleClick}
                clickIndex={0}
                margin="1em "
                backgroundColor={props.theme.white}
                border={`${props.theme.blue} 1px solid`}
                fontColor={props.theme.black}
                shadow={props.theme.blueGray}
                padding="1em 2em"
                size="1em"
              >
                Back
              </Button>
              {toggle && (
                <div className="timeline">
                  <TimeLineMedia
                    media={data.contentfulMaking.media}
                    theme={props.theme}
                  />
                </div>
              )}
            </MakingOfContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default MakingOf;

//
