import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import usePrevious from '../hooks/usePrevious';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 3rem;
  .slick-arrow {
    transform: scale(1.5);
  }
  .box {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    img,
    video {
      max-width: 100%;
      max-height: 70vh;
      margin: auto;
    }
  }
  @media (max-width: 768px) {
    .slick-arrow {
      transform: scale(1);
    }
  }
`;

const TimeLineMedia = props => {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = usePrevious(activeSlide);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      let previous = document.getElementById(`media-${prevSlide}`);
      if (previous.tagName === 'VIDEO') {
        previous.pause();
      }
    } else {
      let previous = document.getElementById(`media-0`);
      if (previous.tagName === 'VIDEO') {
        previous.pause();
      }
      didMountRef.current = true;
    }
  }, [activeSlide]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    accessibility: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <Container theme={props.theme}>
      <Slider {...settings}>
        {props.media.map((media, key) => {
          return media.file.contentType.includes('video') ? (
            <div className="box" key={key}>
              <video
                src={media.file.url}
                id={`media-${key}`}
                controls
                preload
              />
            </div>
          ) : (
            <div className="box" key={key}>
              <img
                src={media.file.url}
                alt={media.file.title}
                id={`media-${key}`}
              />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default TimeLineMedia;

// get a ref for each slide
// before change hook
// pause the video
