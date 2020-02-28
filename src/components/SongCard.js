import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import moment from 'moment';

const Container = styled.div`
  padding: 1em;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background-color: ${props => props.theme.black}ee;
  color: ${props => props.theme.white};
  box-shadow: 0px 4px 3px 0 ${props => props.theme.blue}99,
    0px 8px 13px 0 ${props => props.theme.darkBlue}55,
    0px 18px 23px 0 ${props => props.theme.darkBlue}33;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    box-shadow: 0px 4px 3px 0 ${props => props.theme.red}99,
      0px 8px 13px 0 ${props => props.theme.darkRed}55,
      0px 18px 23px 0 ${props => props.theme.darkRed}33;
    h2 {
      transition: 0.2s;
      border-bottom: 2px solid ${props => props.theme.red};
    }
  }
  h2 {
    margin: 0 auto;
    padding: 0.1em;
    border-bottom: 2px solid ${props => props.theme.blue};
  }
  h4 {
    margin: 0.5em auto;
  }
  p {
    font-size: 0.8em;
    margin: 0 auto;
    max-width: 80%;
  }
  @media (max-width: 450px) {
    min-height: 40px;
    max-height: 64px;
    display: grid;
    grid-template-columns: 2.75fr 1fr;
    padding: 0.7em;
    box-shadow: 0px 2px 1px 0 ${props => props.theme.blue}99,
      0px 4px 7px 0 ${props => props.theme.darkBlue}55,
      0px 9px 12px 0 ${props => props.theme.darkBlue}33;
    h2 {
      font-size: 0.95em;
      border-bottom: 1px solid ${props => props.theme.blue};
    }
    h4 {
      font-size: 0.65em;
    }
    p {
      display: none;
    }
  }
`;
const Song = props => {
  const Completionist = () => <h4>Track {props.song.order}</h4>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return <h4>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</h4>;
    }
  };

  function handleClick() {
    if (
      moment()
        .utc()
        .isAfter(moment(props.song.releaseDate).utc())
    ) {
      props.action();
    } else {
      console.log('Nice Try');
    }
  }
  return (
    <Container theme={props.theme} onClick={() => handleClick()}>
      {moment()
        .utc()
        .isAfter(moment(props.song.releaseDate).utc()) ? (
        <h2>{props.song.name}</h2>
      ) : (
        <h2>Track {props.song.order}</h2>
      )}
      <Countdown date={props.song.releaseDate} renderer={renderer} />
      <p>
        {props.song.postBody.childMarkdownRemark.excerpt}
        <span>Read More</span>
      </p>
    </Container>
  );
};

export default Song;
