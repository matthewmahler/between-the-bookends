import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  img,
  video {
    width: 100%;
    max-height: 300px;
  }
`;

const TimeLineMedia = props => {
  return (
    <Container theme={props.theme} currentImage={props.currentImage}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        showThumbs={false}
        dynamicHeight={true}
      >
        {props.media.map((media, i) => {
          return media.file.contentType.includes('video') ? (
            <div>
              <video src={media.file.url} controls key={i} />
            </div>
          ) : (
            <div>
              <Img fadeIn fluid={media.fluid} key={i} />
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default TimeLineMedia;
