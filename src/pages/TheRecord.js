import React from 'react';
import { animated, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import Album from '../components/LogicContainers/Album';
import { theme } from '../components/theme';

const TheRecord = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <animated.div style={fade}>
      <Layout>
        <Album theme={theme} />
      </Layout>
    </animated.div>
  );
};

export default TheRecord;
