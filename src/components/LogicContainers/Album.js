import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring, useTransition } from 'react-spring';

import AlbumContainer from '../StyledContainers/AlbumContainer';
import SongCardWrapper from '../SongCardWrapper';
import SongPost from '../SongPost';
import Button from '../UI/Button';

const Album = props => {
  const [chosenSong, setSong] = useState(0);
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
  function handleCardClick(index, toggle) {
    setSong(index);
    togglePost(toggle);
  }
  return (
    <animated.div style={fade}>
      <StaticQuery
        query={graphql`
          query AlbumQuery {
            allContentfulAlbum(sort: { fields: [order], order: ASC }) {
              edges {
                node {
                  name
                  order
                  repositoryUrl
                  logo {
                    file {
                      url
                    }
                  }
                  postBody {
                    childMarkdownRemark {
                      excerpt
                      html
                    }
                  }
                  lyrics {
                    childMarkdownRemark {
                      excerpt
                      html
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const songs = data.allContentfulAlbum.edges;

          return (
            <AlbumContainer theme={props.theme} showPost={!showPost}>
              {transitions.map(({ item, key, props: animation }) =>
                !item ? (
                  <SongCardWrapper
                    key={key}
                    songs={songs}
                    showPost={showPost}
                    handleCardClick={handleCardClick}
                    theme={props.theme}
                  />
                ) : (
                  <animated.div style={animation}>
                    <SongPost
                      theme={props.theme}
                      song={songs[chosenSong].node}
                      showPost={showPost}
                      action={() => handleCardClick(0, !showPost)}
                    />
                  </animated.div>
                )
              )}

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
            </AlbumContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default Album;

// position: absolute;
//     margin: 1em;
//     padding: 0.5em;
//     top: 50%;
//     left: 0;
//     border: 1px solid ${props => props.theme.blue};
//     border-radius: 0.5em;
//     background-color: ${props => props.theme.white};
//     color: ${props => props.theme.black};
//     cursor: pointer;
//     :hover {
//       background-color: ${props => props.theme.lightGray};
//       color: ${props => props.theme.blue};
//     }
