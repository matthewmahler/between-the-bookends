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
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
  @media all and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
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
  const [index, setIndex] = useState(null);

  const handleClick = i => {
    setToggler(!toggler);
    setIndex(i);
    console.log(i);
  };

  const breakpointColumnsObj = {
    default: props.media.length > 9 ? 3 : 2,
    1200: props.media.length > 9 ? 3 : 2,
    991: props.media.length > 9 ? 3 : 2,
    768: 2,
  };
  return (
    <Container theme={props.theme} currentImage={props.currentImage}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.media.map((media, key) => {
          return media.file.contentType.includes('video') ? (
            <div onClick={() => handleClick(key)} key={key}>
              <video src={media.file.url} preload="metadata" />
              <FsLightbox
                toggler={index === key ? toggler : false}
                urls={[media.file.url]}
              />
            </div>
          ) : (
            <div onClick={() => handleClick(key)} key={key}>
              <img src={media.file.url} />
              <FsLightbox
                toggler={index === key ? toggler : false}
                urls={[media.file.url]}
              />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default TimeLineMedia;
