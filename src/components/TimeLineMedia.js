import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;

  button {
    margin: 0 1em;
    background-color: ${props => props.theme.white};
    border: ${props => props.theme.blue} 1px solid;
    color: ${props => props.theme.black};
    box-shadow: 0 6px ${props => props.theme.blueGray};
    padding: 1em 2em;
    size: 1em;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: transparent;
  }

  img,
  video {
    width: 100%;
  }
  .fslightbox-toolbar-button:nth-child(1) {
    display: none;
  }
`;

const TimeLineMedia = props => {
  const [toggler, setToggler] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = i => {
    setIndex(i);
    setToggler(!toggler);

    console.log(i);
  };

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    991: 3,
    768: 2,
  };
  return (
    <Container theme={props.theme}>
      <FsLightbox toggler={toggler} sources={props.sources} slide={index + 1} />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.media.map((media, key) => {
          return media.file.contentType.includes('video') ? (
            <div key={key}>
              <video
                src={media.file.url}
                onClick={() => handleClick(key)}
                id={`video${key}`}
              />
            </div>
          ) : (
            <div key={key}>
              <img
                fluid={media.file.url}
                alt={media.file.title}
                onClick={() => handleClick(key)}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default TimeLineMedia;
