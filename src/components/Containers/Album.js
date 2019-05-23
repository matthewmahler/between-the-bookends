import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring, useTransition } from 'react-spring';

import AlbumContainer from '../StyledComponents/AlbumContainer';
import SongCardWrapper from '../StyledComponents/SongCardWrapper';
import SongPost from '../SongPost';

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
            contentfulAbout {
              backgroundImages {
                file {
                  url
                }
              }
            }
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

              <button className="back" onClick={() => props.handleClick(0)}>
                Back
              </button>
            </AlbumContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default Album;
