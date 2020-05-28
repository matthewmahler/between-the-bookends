import React from 'react';
import { animated, useSpring } from 'react-spring';
import Layout from '../components/Layout';
import Form from '../components/LogicContainers/Form';
import { theme } from '../components/theme';

const Submit = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <animated.div style={fade}>
      <Layout>
        <Form theme={theme} />
      </Layout>
    </animated.div>
  );
};

export default Submit;
