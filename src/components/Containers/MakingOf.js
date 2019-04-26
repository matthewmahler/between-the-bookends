import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import MakingOfMedia from '../MakingOfMedia';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${props => props.bg}) no-repeat;
  background-size: cover;

  h1 {
    color: ${props => props.theme.white};
    font-size: 4em;
    margin-bottom: 0;
    padding: 0;
  }
  h2 {
    color: ${props => props.theme.white};
    font-size: 2em;
    margin: 0.5em;
    padding: 0;
  }
  .back {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 50vh;
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
  .timeline {
    height: 100vh;
    overflow: scroll;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    align-items: center;
    justify-content: center;
  }
`;
const Line = styled.div`
  border-left: 1px solid ${props => props.theme.blue};
  border-right: 1px solid ${props => props.theme.blue};
  background-color: ${props => props.theme.white};
  width: 100%;
  height: 100%;
`;

const MakingOf = props => {
  return (
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
        const currentBG = data.contentfulAbout.backgroundImages[index].file.url;

        return (
          <Container theme={props.theme} bg={currentBG}>
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
          </Container>
        );
      }}
    />
  );
};

export default MakingOf;

//
