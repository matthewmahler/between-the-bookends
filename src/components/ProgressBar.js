import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: ${props => (props.loading ? 'auto' : 'none')};
  position: relative;
  height: 2em;
  width: 80%;
  border-radius: 50px;
  border: 1px solid #333;
  div.filler {
    background: ${props => props.theme.blue};
    height: 100%;
    width: ${props => props.progress}%;
    border-radius: inherit;
    transition: width 0.2s ease-in;
  }
`;

const Success = styled.p`
  display: ${props => (props.submitSuccess ? 'auto' : 'none')};
  text-align: center;
  color: ${props => props.theme.blue};
`;

const ProgressBar = props => {
  return (
    <>
      <Success theme={props.theme} submitSuccess={props.submitSuccess}>
        Successfully posted, please wait up to 5 minutes for your new post to
        appear!
      </Success>
      <Bar
        theme={props.theme}
        progress={props.progress}
        loading={props.loading}
      >
        <div className="filler" />
      </Bar>
    </>
  );
};

export default ProgressBar;
