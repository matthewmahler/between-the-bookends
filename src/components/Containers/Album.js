import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import AlbumContainer from '../StyledComponents/AlbumContainer';
import SongCard from '../SongCard';
import SongPost from '../SongPost';

const Album = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const [chosenSong, setSong] = useState(0);
  const [showPost, togglePost] = useState(false);

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
                }
              }
            }
          }
        `}
        render={data => {
          const songs = data.allContentfulAlbum.edges;

          return (
            <AlbumContainer theme={props.theme} showPost={!showPost}>
              <div className="wrapper">
                {songs.map((song, index) => (
                  <SongCard
                    song={song.node}
                    key={index}
                    theme={props.theme}
                    action={() => handleCardClick(index, !showPost)}
                  />
                ))}
              </div>
              <SongPost
                theme={props.theme}
                song={songs[chosenSong].node}
                showPost={showPost}
                action={() => handleCardClick(0, !showPost)}
              />
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
