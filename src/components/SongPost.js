import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  position: relative;
  .story,
  .lyrics {
    display: ${props => (props.showPost ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    border-radius: 20px;
    max-width: 960px;
    padding: 1em;
    background-color: ${props => props.theme.black}ee;
    color: ${props => props.theme.white};
    margin: 1em auto;
    overflow: auto;
    h1 {
      font-size: 3em;
      margin: 0 auto;
      padding: 0.1em;
      border-bottom: 2px solid ${props => props.theme.blue};
      text-shadow: 0px 4px 3px ${props => props.theme.blue}99,
        0px 8px 13px ${props => props.theme.darkBlue}55,
        0px 18px 23px ${props => props.theme.darkBlue}33;
    }
    h4 {
      margin: 0.5em auto;
    }
    p {
      text-align: center;
      padding: 0 1em;
      text-indent: 1em;
    }
  }
  .story {
    display: ${props => (props.flipped ? 'none' : 'auto')};
  }
  .lyrics {
    display: ${props => (!props.flipped ? 'none' : 'auto')};
    .lyricsContainer {
      overflow: scroll;
      max-height: 70vh;

      p {
        margin: 0em;
        text-indent: 0;
      }
    }
  }
  button {
    margin: 1em;
    padding: 0.5em;
    border: 1px solid ${props => props.theme.blue};
    border-radius: 0.5em;
    background-color: transparent;
    color: ${props => props.theme.blue};
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.lightGray};
      color: ${props => props.theme.blue};
    }
  }

  @media (max-width: 768px) {
    .story,
    .lyrics {
      width: 90%;
      max-width: 700px;

      h1 {
        font-size: 2em;
      }
      .flipper {
        margin: 0.5em;
      }
    }

    .close {
      margin-top: 0.5em;
      position: relative;
    }
  }
  @media (max-width: 450px) {
    .story,
    .lyrics {
      background-color: ${props => props.theme.black};
      max-height: 95vh;
      div {
        max-height: 70vh;
        overflow: auto;
      }
    }
    .close,
    .flipper {
      font-size: 0.8em;
      margin: 0.5em;
      padding: 0.7em;
    }
  }
`;

const SongPost = props => {
  const [flipped, flipCard] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const lyrics = props.song.lyrics.childMarkdownRemark.html
    .split('\n')
    .map((line, key) => {
      return line.concat('<br/>');
    })
    .join('');
  console.log(lyrics);
  return (
    <Container theme={props.theme} showPost={props.showPost} flipped={flipped}>
      <animated.div
        className="story"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <h1>{props.song.name}</h1>
        <h4>Track {props.song.order}</h4>
        <button
          className="flipper"
          onClick={() => flipCard(flipped => !flipped)}
        >
          Click For Lyrics
        </button>
        <div
          dangerouslySetInnerHTML={{
            __html: props.song.postBody.childMarkdownRemark.html,
          }}
        />
        <button className="close" onClick={props.action}>
          Tracklist
        </button>
      </animated.div>
      <animated.div
        className="lyrics"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <h1>{props.song.name}</h1>
        <h4>Track {props.song.order}</h4>
        <button
          className="flipper"
          onClick={() => flipCard(flipped => !flipped)}
        >
          Click For Story
        </button>
        <div
          className="lyricsContainer"
          dangerouslySetInnerHTML={{
            __html: lyrics,
          }}
        />
        <button className="close" onClick={props.action}>
          Tracklist
        </button>
      </animated.div>
    </Container>
  );
};

export default SongPost;
