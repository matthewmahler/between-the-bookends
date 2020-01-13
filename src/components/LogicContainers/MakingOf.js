import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
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
  return (
    <animated.div style={fade}>
      <StaticQuery
        query={graphql`
          query MakingOfQuery {
            contentfulAbout {
              backgroundImages {
                fluid {
                  tracedSVG
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
          const index = Math.round(Math.random() * 7);
          const currentBG = data.contentfulAbout.backgroundImages[index].fluid;
          let sources = [];
          data.contentfulMaking.media.map((media, key) => {
            sources.push(media.file.url);
          });

          return (
            <BackgroundImage
              Tag="section"
              fluid={currentBG}
              fadeIn
              backgroundColor={props.theme.black}
            >
              <MakingOfContainer theme={props.theme} bg={currentBG}>
                <div className="header">
                  <h1>{data.contentfulMaking.title}</h1>
                  <h2>{data.contentfulMaking.subtitle}</h2>
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
                <div className="timeline">
                  <TimeLineMedia
                    media={data.contentfulMaking.media.reverse()}
                    sources={sources.reverse()}
                  />
                </div>
              </MakingOfContainer>
            </BackgroundImage>
          );
        }}
      />
    </animated.div>
  );
};

export default MakingOf;

//
