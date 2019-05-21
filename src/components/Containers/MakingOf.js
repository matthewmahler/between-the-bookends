import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import MakingOfMedia from '../MakingOfMedia';
import MakingOfContainer from '../StyledComponents/MakingOfContainer';

const Line = styled.div`
  border-left: 1px solid ${props => props.theme.blue};
  border-right: 1px solid ${props => props.theme.blue};
  background-color: ${props => props.theme.white};
  width: 100%;
  height: 100%;
`;

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
              media {
                title
                file {
                  contentType
                  url
                  fileName
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
              <div className="timeline">
                {data.contentfulMaking.media.map((asset, i) => {
                  return asset.file.contentType === 'image/jpeg' ? (
                    <>
                      <MakingOfMedia {...asset} theme={props.theme} key={i} />
                      <Line theme={props.theme} />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <Line theme={props.theme} />
                      <MakingOfMedia {...asset} theme={props.theme} key={i} />
                    </>
                  );
                })}
              </div>
              <button className="back" onClick={() => props.handleClick(0)}>
                Back
              </button>
            </MakingOfContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default MakingOf;

//
