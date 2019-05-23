import React from 'react';
import { animated, useTrail } from 'react-spring';
import SongCard from '../SongCard';

const SongCardWrapper = props => {
  const trail = useTrail(props.songs.length, {
    marginLeft: 0,
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { marginLeft: -200, opacity: 0, transform: 'translate3d(0,-20px,0)' },
  });

  return (
    <div className="wrapper">
      {trail.map((animation, index) => {
        return (
          <animated.div key={index} style={animation}>
            <SongCard
              song={props.songs[index].node}
              theme={props.theme}
              action={() => props.handleCardClick(index, !props.showPost)}
            />
          </animated.div>
        );
      })}
    </div>
  );
};

export default SongCardWrapper;
