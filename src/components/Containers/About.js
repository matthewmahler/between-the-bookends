import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Album from './Album';

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${props => props.bg});
  background-size: cover;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  font-family: 'miller';
  div.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background: ${props => props.theme.lightGray}dd;
    color: ${props => props.theme.black};
    padding: 3em;
    border-radius: 30px;

    h1 {
      font-size: 2em;
      margin: 0 auto;
      border-bottom: 3px solid ${props => props.theme.blue};
    }
    button {
      margin-top: 2em;
      outline: none;
      border: white 1px solid;
      cursor: pointer;
      background: ${props => props.theme.blue};
      position: relative;
      font-size: 2em;
      color: ${props => props.theme.white};
      padding: 0.5em 1em;
      border-radius: 10px;
      box-shadow: 0 6px ${props => props.theme.blueGray};
    }

    button:hover {
      box-shadow: 0 4px ${props => props.theme.blueGray};
      top: 2px;
    }

    button:active {
      box-shadow: 0 0 ${props => props.theme.blueGray};
      top: 6px;
    }
  }
  div.profileImages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      max-width: 100%;
      border-radius: 30px;
    }
  }
`;

const About = props => {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                html
              }
            }
            backgroundImages {
              file {
                url
              }
            }
            profileImages {
              title
              fluid {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const {
          aboutMe,
          profileImages,
          backgroundImages,
        } = data.contentfulAbout;
        let index = Math.round(Math.random() * 7);
        let currentBG = backgroundImages[index].file.url;
        return (
          <Container bg={currentBG} theme={props.theme}>
            <div className="about">
              <h1>About The Record</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutMe.childMarkdownRemark.html,
                }}
              />
              <div className="profileImages">
                {profileImages.map((img, i) => {
                  return <img src={img.fluid.src} key={i} />;
                })}
              </div>
              <button>▼</button>
            </div>
            <Album />
          </Container>
        );
      }}
    />
  );
};

export default About;
