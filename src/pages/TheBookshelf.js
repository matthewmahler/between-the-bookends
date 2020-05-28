import React from 'react';
import { animated, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import Blog from '../components/LogicContainers/Blog';
import { theme } from '../components/theme';

const TheBookshelf = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <animated.div style={fade}>
      <Layout>
        <Blog theme={theme} />
      </Layout>
    </animated.div>
  );
};

export default TheBookshelf;
