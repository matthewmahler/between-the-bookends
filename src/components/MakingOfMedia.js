import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.darkBlue}cc;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1em;
  margin: 0.5em;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
  }

  img,
  video {
    max-width: 300px;
  }
`;

const MakingOfMedia = props => {
  return (
    <Container theme={props.theme}>
      {props.file.contentType === 'image/jpeg' ? (
        <div className="wrapper">
          <h3>{props.title}</h3>
          <img src={props.file.url} alt={props.file.fileName} />
        </div>
      ) : (
        <div className="wrapper">
          <h3>{props.title}</h3>
          <video src={props.file.url} controls alt={props.file.fileName} />
        </div>
      )}
    </Container>
  );
};

export default MakingOfMedia;
