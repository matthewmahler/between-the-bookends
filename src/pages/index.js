import React from 'react';
import { animated, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import About from '../components/LogicContainers/About';
import '../fonts/fonts.css';
import { theme } from '../components/theme';

const HomePage = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });

  return (
    <animated.div style={fade}>
      <Layout>
        <About theme={theme} />
      </Layout>
    </animated.div>
  );
};

export default HomePage;
