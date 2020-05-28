import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring, useTransition } from 'react-spring';
import AlbumContainer from '../StyledContainers/AlbumContainer';
import SongCardWrapper from '../SongCardWrapper';
import SongPost from '../SongPost';
import Nav from '../Nav';

const Album = ({ theme }) => {
  const [chosenSong, setSong] = useState(0);
  const [showPost, togglePost] = useState(false);
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Making Of', path: '/TheProcess' },
    { text: 'Your Stories', path: '/TheBookshelf' },
  ];
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
                  releaseDate
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
        render={(data) => {
          const songs = data.allContentfulAlbum.edges;

          return (
            <AlbumContainer theme={theme} showPost={!showPost}>
              {transitions.map(({ item, key, props: animation }) =>
                !item ? (
                  <SongCardWrapper
                    key={key}
                    songs={songs}
                    showPost={showPost}
                    handleCardClick={handleCardClick}
                    theme={theme}
                  />
                ) : (
                  <animated.div style={animation} key={key}>
                    <SongPost
                      theme={theme}
                      song={songs[chosenSong].node}
                      showPost={showPost}
                      action={() => handleCardClick(0, !showPost)}
                    />
                  </animated.div>
                )
              )}

              <Nav links={links} />
            </AlbumContainer>
          );
        }}
      />
    </animated.div>
  );
};

export default Album;
