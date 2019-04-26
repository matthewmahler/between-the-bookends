import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SongCard from '../SongCard';
import SongPost from '../SongPost';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${props => props.bg});
  background-size: cover;
  color: ${props => props.theme.darkBlue};
  min-height: 100vh;
  .wrapper {
    margin: 1em auto;
    display: ${props => (props.showPost ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 960px;
    box-sizing: border-box;
    min-height: 60vh;
  }
  .back {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 50%;
    left: 0;
    border: 1px solid ${props => props.theme.blue};
    border-radius: 0.5em;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.lightGray};
      color: ${props => props.theme.blue};
    }
  }
`;
const Album = props => {
  const [chosenSong, setSong] = useState(0);
  const [showPost, togglePost] = useState(false);

  function handleCardClick(index, toggle) {
    setSong(index);
    togglePost(toggle);
  }
  return (
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
        const index = Math.round(Math.random() * 7);
        const currentBG = data.contentfulAbout.backgroundImages[index].file.url;
        return (
          <Container theme={props.theme} showPost={!showPost} bg={currentBG}>
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
          </Container>
        );
      }}
    />
  );
};

export default Album;
