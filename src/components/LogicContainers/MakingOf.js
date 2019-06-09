import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import MakingOfContainer from '../StyledContainers/MakingOfContainer';
import TimeLinePoint from '../TimeLinePoint';
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
                file {
                  url
                }
              }
            }
            contentfulMaking {
              title
              subtitle
              timelinePoint {
                title
                date
                media {
                  fluid {
                    aspectRatio
                    src
                    tracedSVG
                    srcSet
                    sizes
                  }
                  file {
                    contentType
                    url
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const index = Math.round(Math.random() * 7);
          const currentBG =
            data.contentfulAbout.backgroundImages[index].file.url;

          return (
            <MakingOfContainer theme={props.theme} bg={currentBG}>
              <h1>{data.contentfulMaking.title}</h1>
              <h2>{data.contentfulMaking.subtitle}</h2>
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
              <ul className="timeline">
                {data.contentfulMaking.timelinePoint.map((point, key) =>
                  key % 2 === 0 ? (
                    <li>
                      <TimeLinePoint point={point} theme={props.theme} />
                    </li>
                  ) : (
                    <li>
                      <TimeLinePoint point={point} theme={props.theme} />
                    </li>
                  )
                )}
              </ul>
            </MakingOfContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default MakingOf;

//
