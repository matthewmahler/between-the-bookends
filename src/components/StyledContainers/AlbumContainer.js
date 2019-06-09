import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 450px) {
    .wrapper {
      grid-template-columns: 1fr;
      grid-gap: 0.5em;
    }
    .back {
      font-size: 0.8em;
      top: 0;
      left: 0;
    }
  }
`;

const AlbumContainer = props => {
  return (
    <Container showPost={props.showPost} theme={props.theme}>
      {props.children}
    </Container>
  );
};

export default AlbumContainer;
