import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60vh;
  background: ${props => props.theme.white}dd;
  color: ${props => props.theme.darkBlue};
  padding: 3em;
  border-radius: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.darkBlue};
  }
`;
const Album = props => {
  return (
    <StaticQuery
      query={graphql`
        query AlbumQuery {
          allContentfulAlbum {
            edges {
              node {
                name
                description
                type
                repositoryUrl
                logo {
                  file {
                    url
                  }
                }
                postBody {
                  childMarkdownRemark {
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
        console.log(songs);
        return (
          <Container theme={props.theme}>
            {songs.map((song, i) => (
              <div className="song" key={i}>
                <p>{song.node.name}</p>
              </div>
            ))}
          </Container>
        );
      }}
    />
  );
};

export default Album;
