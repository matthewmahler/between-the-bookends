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
    background-color: ${props => props.theme.lightBlue};
    color: ${props => props.theme.black};
    margin: 1em auto;
    overflow: auto;
    h1 {
      font-size: 3em;
      margin: 0.3em auto;
    }
    h4 {
      margin: 0 auto;
    }
    p {
      padding: 0 2em;
      text-indent: 1em;
    }
  }
  .story {
    display: ${props => (props.flipped ? 'none' : 'auto')};
  }
  .lyrics {
    display: ${props => (!props.flipped ? 'none' : 'auto')};
  }
  .flipper {
    margin: 1em;
    padding: 0.5em;
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
  .close {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 0;
    right: 0;
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

const SongPost = props => {
  const [flipped, flipCard] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

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
          Close
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
          dangerouslySetInnerHTML={{
            __html: props.song.lyrics.childMarkdownRemark.html,
          }}
        />
        <button className="close" onClick={props.action}>
          Close
        </button>
      </animated.div>
    </Container>
  );
};

export default SongPost;
