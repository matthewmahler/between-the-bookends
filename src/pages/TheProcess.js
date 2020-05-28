import React from 'react';
import { animated, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import MakingOf from '../components/LogicContainers/MakingOf';
import { theme } from '../components/theme';

const TheProcess = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <animated.div style={fade}>
      <Layout>
        <MakingOf theme={theme} />
      </Layout>
    </animated.div>
  );
};

export default TheProcess;
