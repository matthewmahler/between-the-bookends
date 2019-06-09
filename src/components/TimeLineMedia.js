import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  .provider {
    width: 100%;
    min-width: 60vw;
    max-width: 960px;
    button {
      margin: 0 1em;
      background-color: ${props => props.theme.white};
      border: ${props => props.theme.blue} 1px solid;
      color: ${props => props.theme.black};
      box-shadow: 0 6px ${props => props.theme.blueGray};
      padding: 1em 2em;
      size: 1em;
    }
    .slider {
      width: 100%;
      .carousel__inner-slide {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img,
        video {
          width: 90%;
          max-height: 80vh;
        }
      }
    }
  }
`;

const TimeLineMedia = props => {
  return (
    <Container theme={props.theme} currentImage={props.currentImage}>
      <CarouselProvider
        naturalSlideWidth={9}
        naturalSlideHeight={9}
        totalSlides={props.media.length}
        className="provider"
      >
        <Slider className="slider">
          {props.media.map((media, key) => {
            return media.file.contentType.includes('video') ? (
              <Slide index={key} className="slide">
                <video src={media.file.url} controls />
              </Slide>
            ) : (
              <Slide index={key} className="slide">
                <img src={media.file.url} />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Container>
  );
};

export default TimeLineMedia;
